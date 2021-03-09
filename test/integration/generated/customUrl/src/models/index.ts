/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttps from "@azure/core-https";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/** Optional parameters. */
export interface CustomUrlClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** A string value that is used as a global part of the parameterized host */
  host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
