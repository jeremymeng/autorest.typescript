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

/** Contains response data for the getNull operation. */
export type IntGetNullResponse = {
  /** The parsed response body. */
  body: number;
};

/** Contains response data for the getInvalid operation. */
export type IntGetInvalidResponse = {
  /** The parsed response body. */
  body: number;
};

/** Contains response data for the getOverflowInt32 operation. */
export type IntGetOverflowInt32Response = {
  /** The parsed response body. */
  body: number;
};

/** Contains response data for the getUnderflowInt32 operation. */
export type IntGetUnderflowInt32Response = {
  /** The parsed response body. */
  body: number;
};

/** Contains response data for the getOverflowInt64 operation. */
export type IntGetOverflowInt64Response = {
  /** The parsed response body. */
  body: number;
};

/** Contains response data for the getUnderflowInt64 operation. */
export type IntGetUnderflowInt64Response = {
  /** The parsed response body. */
  body: number;
};

/** Contains response data for the getUnixTime operation. */
export type IntGetUnixTimeResponse = {
  /** The parsed response body. */
  body: Date;
};

/** Contains response data for the getInvalidUnixTime operation. */
export type IntGetInvalidUnixTimeResponse = {
  /** The parsed response body. */
  body: Date;
};

/** Contains response data for the getNullUnixTime operation. */
export type IntGetNullUnixTimeResponse = {
  /** The parsed response body. */
  body: Date;
};

/** Optional parameters. */
export interface BodyIntegerClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
