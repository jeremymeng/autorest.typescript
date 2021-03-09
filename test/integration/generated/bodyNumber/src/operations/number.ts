/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttps from "@azure/core-https";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyNumberClientContext } from "../bodyNumberClientContext";
import {
  NumberGetNullResponse,
  NumberGetInvalidFloatResponse,
  NumberGetInvalidDoubleResponse,
  NumberGetInvalidDecimalResponse,
  NumberGetBigFloatResponse,
  NumberGetBigDoubleResponse,
  NumberGetBigDoublePositiveDecimalResponse,
  NumberGetBigDoubleNegativeDecimalResponse,
  NumberGetBigDecimalResponse,
  NumberGetBigDecimalPositiveDecimalResponse,
  NumberGetBigDecimalNegativeDecimalResponse,
  NumberGetSmallFloatResponse,
  NumberGetSmallDoubleResponse,
  NumberGetSmallDecimalResponse
} from "../models";

/** Class representing a NumberOperations. */
export class NumberOperations {
  private readonly client: BodyNumberClientContext;

  /**
   * Initialize a new instance of the class NumberOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BodyNumberClientContext) {
    this.client = client;
  }

  /**
   * Get null Number value
   * @param options The options parameters.
   */
  getNull(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Get invalid float Number value
   * @param options The options parameters.
   */
  getInvalidFloat(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetInvalidFloatResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidFloatOperationSpec
    );
  }

  /**
   * Get invalid double Number value
   * @param options The options parameters.
   */
  getInvalidDouble(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetInvalidDoubleResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidDoubleOperationSpec
    );
  }

  /**
   * Get invalid decimal Number value
   * @param options The options parameters.
   */
  getInvalidDecimal(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetInvalidDecimalResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidDecimalOperationSpec
    );
  }

  /**
   * Put big float value 3.402823e+20
   * @param numberBody number body
   * @param options The options parameters.
   */
  putBigFloat(
    numberBody: number,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { numberBody, options },
      putBigFloatOperationSpec
    );
  }

  /**
   * Get big float value 3.402823e+20
   * @param options The options parameters.
   */
  getBigFloat(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetBigFloatResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBigFloatOperationSpec
    );
  }

  /**
   * Put big double value 2.5976931e+101
   * @param numberBody number body
   * @param options The options parameters.
   */
  putBigDouble(
    numberBody: number,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { numberBody, options },
      putBigDoubleOperationSpec
    );
  }

  /**
   * Get big double value 2.5976931e+101
   * @param options The options parameters.
   */
  getBigDouble(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetBigDoubleResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBigDoubleOperationSpec
    );
  }

  /**
   * Put big double value 99999999.99
   * @param options The options parameters.
   */
  putBigDoublePositiveDecimal(
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putBigDoublePositiveDecimalOperationSpec
    );
  }

  /**
   * Get big double value 99999999.99
   * @param options The options parameters.
   */
  getBigDoublePositiveDecimal(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetBigDoublePositiveDecimalResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBigDoublePositiveDecimalOperationSpec
    );
  }

  /**
   * Put big double value -99999999.99
   * @param options The options parameters.
   */
  putBigDoubleNegativeDecimal(
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putBigDoubleNegativeDecimalOperationSpec
    );
  }

  /**
   * Get big double value -99999999.99
   * @param options The options parameters.
   */
  getBigDoubleNegativeDecimal(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetBigDoubleNegativeDecimalResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBigDoubleNegativeDecimalOperationSpec
    );
  }

  /**
   * Put big decimal value 2.5976931e+101
   * @param numberBody number body
   * @param options The options parameters.
   */
  putBigDecimal(
    numberBody: number,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { numberBody, options },
      putBigDecimalOperationSpec
    );
  }

  /**
   * Get big decimal value 2.5976931e+101
   * @param options The options parameters.
   */
  getBigDecimal(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetBigDecimalResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBigDecimalOperationSpec
    );
  }

  /**
   * Put big decimal value 99999999.99
   * @param options The options parameters.
   */
  putBigDecimalPositiveDecimal(
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putBigDecimalPositiveDecimalOperationSpec
    );
  }

  /**
   * Get big decimal value 99999999.99
   * @param options The options parameters.
   */
  getBigDecimalPositiveDecimal(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetBigDecimalPositiveDecimalResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBigDecimalPositiveDecimalOperationSpec
    );
  }

  /**
   * Put big decimal value -99999999.99
   * @param options The options parameters.
   */
  putBigDecimalNegativeDecimal(
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putBigDecimalNegativeDecimalOperationSpec
    );
  }

  /**
   * Get big decimal value -99999999.99
   * @param options The options parameters.
   */
  getBigDecimalNegativeDecimal(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetBigDecimalNegativeDecimalResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBigDecimalNegativeDecimalOperationSpec
    );
  }

  /**
   * Put small float value 3.402823e-20
   * @param numberBody number body
   * @param options The options parameters.
   */
  putSmallFloat(
    numberBody: number,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { numberBody, options },
      putSmallFloatOperationSpec
    );
  }

  /**
   * Get big double value 3.402823e-20
   * @param options The options parameters.
   */
  getSmallFloat(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetSmallFloatResponse> {
    return this.client.sendOperationRequest(
      { options },
      getSmallFloatOperationSpec
    );
  }

  /**
   * Put small double value 2.5976931e-101
   * @param numberBody number body
   * @param options The options parameters.
   */
  putSmallDouble(
    numberBody: number,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { numberBody, options },
      putSmallDoubleOperationSpec
    );
  }

  /**
   * Get big double value 2.5976931e-101
   * @param options The options parameters.
   */
  getSmallDouble(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetSmallDoubleResponse> {
    return this.client.sendOperationRequest(
      { options },
      getSmallDoubleOperationSpec
    );
  }

  /**
   * Put small decimal value 2.5976931e-101
   * @param numberBody number body
   * @param options The options parameters.
   */
  putSmallDecimal(
    numberBody: number,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { numberBody, options },
      putSmallDecimalOperationSpec
    );
  }

  /**
   * Get small decimal value 2.5976931e-101
   * @param options The options parameters.
   */
  getSmallDecimal(
    options?: coreClient.OperationOptions
  ): Promise<NumberGetSmallDecimalResponse> {
    return this.client.sendOperationRequest(
      { options },
      getSmallDecimalOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/number/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidFloatOperationSpec: coreClient.OperationSpec = {
  path: "/number/invalidfloat",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/number/invaliddouble",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/invaliddecimal",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigFloatOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/float/3.402823e+20",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBigFloatOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/float/3.402823e+20",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/double/2.5976931e+101",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBigDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/double/2.5976931e+101",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDoublePositiveDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/double/99999999.99",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBigDoublePositiveDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/double/99999999.99",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDoubleNegativeDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/double/-99999999.99",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBigDoubleNegativeDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/double/-99999999.99",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/decimal/2.5976931e+101",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBigDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/decimal/2.5976931e+101",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDecimalPositiveDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/decimal/99999999.99",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBigDecimalPositiveDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/decimal/99999999.99",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDecimalNegativeDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/decimal/-99999999.99",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBigDecimalNegativeDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/big/decimal/-99999999.99",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putSmallFloatOperationSpec: coreClient.OperationSpec = {
  path: "/number/small/float/3.402823e-20",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSmallFloatOperationSpec: coreClient.OperationSpec = {
  path: "/number/small/float/3.402823e-20",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putSmallDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/number/small/double/2.5976931e-101",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSmallDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/number/small/double/2.5976931e-101",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putSmallDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/small/decimal/2.5976931e-101",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSmallDecimalOperationSpec: coreClient.OperationSpec = {
  path: "/number/small/decimal/2.5976931e-101",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
