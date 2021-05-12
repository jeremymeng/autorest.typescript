import {
  HttpMethods,
  HttpOperationResponse,
  OperationArguments,
  OperationResponse,
  OperationSpec
} from "@azure/core-http";
import { failureStates, successStates, terminalStates } from "./constants";
import { BaseResult, LROConfig, LROMode, SendOperationFn } from "./models";

/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final LRO response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLRO(finalStateVia?: string) {
  let initialOperationInfo: LROResponseInfo | undefined;
  let isInitialRequest = true;

  return (response: HttpOperationResponse) => {
    if (response.status < 200 || response.status >= 300) {
      return true;
    }

    if (!initialOperationInfo) {
      initialOperationInfo = getLROData(response);
    } else {
      isInitialRequest = false;
    }

    if (
      initialOperationInfo.azureAsyncOperation ||
      initialOperationInfo.operationLocation
    ) {
      return (
        !isInitialRequest &&
        isAsyncOperationFinalResponse(
          response,
          initialOperationInfo,
          finalStateVia
        )
      );
    }

    if (initialOperationInfo.location) {
      return isLocationFinalResponse(response);
    }

    if (initialOperationInfo.requestMethod === "PUT") {
      return isBodyPollingFinalResponse(response);
    }

    return true;
  };
}

function isAsyncOperationFinalResponse(
  response: HttpOperationResponse,
  initialOperationInfo: LROResponseInfo,
  finalStateVia?: string
): boolean {
  const status: string = response.parsedBody?.status || "Succeeded";
  if (!terminalStates.includes(status.toLowerCase())) {
    return false;
  }

  if (initialOperationInfo.requestMethod === "DELETE") {
    return true;
  }

  if (
    initialOperationInfo.requestMethod === "PUT" &&
    finalStateVia &&
    finalStateVia.toLowerCase() === "azure-asyncoperation"
  ) {
    return true;
  }

  if (
    initialOperationInfo.requestMethod !== "PUT" &&
    !initialOperationInfo.location
  ) {
    return true;
  }

  return false;
}

function isLocationFinalResponse(response: HttpOperationResponse): boolean {
  return response.status !== 202;
}

function isBodyPollingFinalResponse(response: HttpOperationResponse): boolean {
  const provisioningState: string =
    response.parsedBody?.properties?.provisioningState || "Succeeded";

  if (terminalStates.includes(provisioningState.toLowerCase())) {
    return true;
  }

  return false;
}

interface LROResponseInfo {
  requestMethod: HttpMethods;
  azureAsyncOperation?: string;
  operationLocation?: string;
  location?: string;
}

function getLROData(result: HttpOperationResponse): LROResponseInfo {
  return {
    azureAsyncOperation: result.headers.get("azure-asyncoperation"),
    operationLocation: result.headers.get("operation-location"),
    location: result.headers.get("location"),
    requestMethod: result.request.method
  };
}

/**
 * Detects where the continuation token is and returns it. Notice that azure-asyncoperation
 * must be checked first before the other location headers because there are scenarios
 * where both azure-asyncoperation and location could be present in the same response but
 * azure-asyncoperation should be the one to use for polling.
 */
export function getPollingURL(
  rawResponse: unknown,
  defaultPath: string
): string {
  return (
    getAzureAsyncoperation(rawResponse) ??
    getLocation(rawResponse) ??
    getOperationLocation(rawResponse) ??
    defaultPath
  );
}

function castRawResponse(rawResponse: any): HttpOperationResponse {
  return rawResponse._response;
}

export function getLocation(rawResponse: unknown): string | undefined {
  return castRawResponse(rawResponse).headers?.get("location");
}

export function getOperationLocation(rawResponse: unknown): string | undefined {
  return castRawResponse(rawResponse).headers?.get("operation-location");
}

export function getAzureAsyncoperation(
  rawResponse: unknown
): string | undefined {
  return castRawResponse(rawResponse).headers?.get("azure-asyncoperation");
}

export function getProvisioningState(rawResponse: unknown): string {
  const castResponse = castRawResponse(rawResponse);
  const { properties, provisioningState } =
    castResponse.parsedBody ??
    (castResponse.bodyAsText ? JSON.parse(castResponse.bodyAsText) : {});
  const state: string | undefined =
    properties?.provisioningState ?? provisioningState;
  return state?.toLowerCase() ?? "succeeded";
}

export function getResponseStatus(rawResponse: unknown): string {
  const castResponse = castRawResponse(rawResponse);
  const { status } =
    castResponse.parsedBody ??
    (castResponse.bodyAsText ? JSON.parse(castResponse.bodyAsText) : {});
  return status?.toLowerCase() ?? "succeeded";
}

/**
 * Polling calls will always return a status object i.e. {"status": "success"}
 * these intermediate responses are not described in the swagger so we need to
 * pass custom mappers at runtime.
 * This function replaces all the existing mappers to be able to deserialize a status object
 * @param responses Original set of responses defined in the operation
 */
function getCompositeMappers(responses: {
  [responseCode: string]: OperationResponse;
}): {
  [responseCode: string]: OperationResponse;
} {
  return Object.keys(responses).reduce((acc, statusCode) => {
    return {
      ...acc,
      [statusCode]: {
        ...responses[statusCode],
        bodyMapper: {
          type: {
            name: "Composite",
            modelProperties: {
              status: {
                serializedName: "status",
                type: {
                  name: "String"
                }
              }
            }
          }
        }
      }
    };
  }, {} as { [responseCode: string]: OperationResponse });
}

export function createPollOnce<TResult extends BaseResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: OperationArguments,
  spec: OperationSpec,
  mode?: LROMode
): (path?: string) => Promise<TResult> {
  // Make sure we don't send any body to the get request
  const { requestBody, responses, ...restSpec } = spec;
  if (mode === "AzureAsync") {
    return async (path?: string) => {
      return sendOperationFn(args, {
        ...restSpec,
        responses: getCompositeMappers(responses),
        httpMethod: "GET",
        ...(path && { path })
      });
    };
  }
  return async (path?: string) => {
    return sendOperationFn(args, {
      ...restSpec,
      responses: responses,
      httpMethod: "GET",
      ...(path && { path })
    });
  };
}

export function createRetrieveAzureAsyncResource<TResult extends BaseResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: OperationArguments,
  spec: OperationSpec
): (path?: string) => Promise<TResult> {
  const updatedArgs = { ...args };
  if (updatedArgs.options) {
    updatedArgs.options.shouldDeserialize = true;
  }
  return createPollOnce(sendOperationFn, updatedArgs, spec);
}

export function inferLROMode(
  spec: OperationSpec,
  rawResponse: unknown
): LROConfig {
  const requestMethod = spec.httpMethod;
  if (getAzureAsyncoperation(rawResponse) !== undefined) {
    return {
      mode: "AzureAsync",
      resourceLocation:
        requestMethod === "PUT"
          ? spec.path
          : requestMethod === "POST"
          ? getLocation(rawResponse)
          : undefined
    };
  } else if (
    getLocation(rawResponse) !== undefined ||
    getOperationLocation(rawResponse) !== undefined
  ) {
    return {
      mode: "Location"
    };
  } else if (["PUT", "PATCH"].includes(requestMethod)) {
    return {
      mode: "Body"
    };
  }
  return {};
}

export function isBodyPollingDone(rawResponse: unknown) {
  const state = getProvisioningState(rawResponse);
  if (failureStates.includes(state)) {
    throw new Error(`Provisioning state: ${state}`);
  }
  return successStates.includes(state);
}

export function isLocationPollingDone<TResult extends BaseResult>(
  rawResponse: TResult
) {
  const code = rawResponse._response.status;
  if (![202, 200].includes(code)) {
    throw new Error(`Operation failed`);
  }
  return code !== 202;
}

export function isAzureAsyncPollingDone(rawResponse: unknown) {
  const state = getResponseStatus(rawResponse);
  if (failureStates.includes(state)) {
    throw new Error(`Operation status: ${state}`);
  }
  return successStates.includes(state);
}

export function getSpecPath(spec: OperationSpec): string {
  if (spec.path) {
    return spec.path;
  } else {
    throw Error("Bad spec: request path is not found!");
  }
}
