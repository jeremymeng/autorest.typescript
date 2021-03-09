/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { ValidationClientOptionalParams } from "./models";

export class ValidationClientContext extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the ValidationClientContext class.
   * @param subscriptionId Subscription ID.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: ValidationClientOptionalParams
  ) {
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    const defaults: ValidationClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "http://localhost:3000"
    };

    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
    this.apiVersion = options.apiVersion || "1.0.0";
  }
}
