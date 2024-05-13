import { PipelinePolicy } from "@azure/core-rest-pipeline";
import { XmsRequestIdClient } from "./generated/azure/special-headers/client-request-id/src/index.js";
import { assert } from "chai";
describe("XmsRequestIdClient Classical Client", () => {
  let client: XmsRequestIdClient;

  beforeEach(() => {
    client = new XmsRequestIdClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should add client-request-id in header transparently", async () => {
    try {
      const result = await client.get();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should override request id with client setting one", async () => {
    try {
      const overrideId = "86aede1f-96fa-4e7f-b1e1-bf8a947cb804";
      const result = await client.get({
        requestOptions: {
          headers: {
            "x-ms-client-request-id": overrideId
          }
        }
      });
      assert.isUndefined(result);
      const checkClientRequestIdPolicy: PipelinePolicy = {
        sendRequest: (req, next) => {
          assert.equal(overrideId, req.headers.get("x-ms-client-request-id"));
          return next(req);
        },
        name: "preventCachingPolicy"
      };
      client = new XmsRequestIdClient({
        allowInsecureConnection: true,
        endpoint: "http://localhost:3002",
        additionalPolicies: [
          {
            policy: checkClientRequestIdPolicy,
            position: "perCall"
          }
        ]
      });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should override with x-test-client-request-id header", async () => {
    try {
      client = new XmsRequestIdClient({
        allowInsecureConnection: true,
        telemetryOptions: {
          clientRequestIdHeaderName: "x-test-request-id"
        }
      });
      await client.get();
      assert.fail("should throw exceptions");
    } catch (err) {
      assert.isNotNull(err);
    }
  });
});
