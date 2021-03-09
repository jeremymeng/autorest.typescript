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
import { UrlClientContext } from "../urlClientContext";
import { UriColor } from "../models";

/** Class representing a Paths. */
export class Paths {
  private readonly client: UrlClientContext;

  /**
   * Initialize a new instance of the class Paths class.
   * @param client Reference to the service client
   */
  constructor(client: UrlClientContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value on path
   * @param options The options parameters.
   */
  getBooleanTrue(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getBooleanTrueOperationSpec
    );
  }

  /**
   * Get false Boolean value on path
   * @param options The options parameters.
   */
  getBooleanFalse(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getBooleanFalseOperationSpec
    );
  }

  /**
   * Get '1000000' integer value
   * @param options The options parameters.
   */
  getIntOneMillion(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getIntOneMillionOperationSpec
    );
  }

  /**
   * Get '-1000000' integer value
   * @param options The options parameters.
   */
  getIntNegativeOneMillion(
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getIntNegativeOneMillionOperationSpec
    );
  }

  /**
   * Get '10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getTenBillion(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getTenBillionOperationSpec
    );
  }

  /**
   * Get '-10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getNegativeTenBillion(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getNegativeTenBillionOperationSpec
    );
  }

  /**
   * Get '1.034E+20' numeric value
   * @param options The options parameters.
   */
  floatScientificPositive(
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      floatScientificPositiveOperationSpec
    );
  }

  /**
   * Get '-1.034E-20' numeric value
   * @param options The options parameters.
   */
  floatScientificNegative(
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      floatScientificNegativeOperationSpec
    );
  }

  /**
   * Get '9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalPositive(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      doubleDecimalPositiveOperationSpec
    );
  }

  /**
   * Get '-9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalNegative(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      doubleDecimalNegativeOperationSpec
    );
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   * @param options The options parameters.
   */
  stringUnicode(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      stringUnicodeOperationSpec
    );
  }

  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   * @param options The options parameters.
   */
  stringUrlEncoded(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      stringUrlEncodedOperationSpec
    );
  }

  /**
   * https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded
   * @param options The options parameters.
   */
  stringUrlNonEncoded(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      stringUrlNonEncodedOperationSpec
    );
  }

  /**
   * Get ''
   * @param options The options parameters.
   */
  stringEmpty(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      stringEmptyOperationSpec
    );
  }

  /**
   * Get null (should throw)
   * @param stringPath null string value
   * @param options The options parameters.
   */
  stringNull(
    stringPath: string,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { stringPath, options },
      stringNullOperationSpec
    );
  }

  /**
   * Get using uri with 'green color' in path parameter
   * @param enumPath send the value green
   * @param options The options parameters.
   */
  enumValid(
    enumPath: UriColor,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { enumPath, options },
      enumValidOperationSpec
    );
  }

  /**
   * Get null (should throw on the client before the request is sent on wire)
   * @param enumPath send null should throw
   * @param options The options parameters.
   */
  enumNull(
    enumPath: UriColor,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { enumPath, options },
      enumNullOperationSpec
    );
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param options The options parameters.
   */
  byteMultiByte(
    bytePath: Uint8Array,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bytePath, options },
      byteMultiByteOperationSpec
    );
  }

  /**
   * Get '' as byte array
   * @param options The options parameters.
   */
  byteEmpty(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      byteEmptyOperationSpec
    );
  }

  /**
   * Get null as byte array (should throw)
   * @param bytePath null as byte array (should throw)
   * @param options The options parameters.
   */
  byteNull(
    bytePath: Uint8Array,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bytePath, options },
      byteNullOperationSpec
    );
  }

  /**
   * Get '2012-01-01' as date
   * @param options The options parameters.
   */
  dateValid(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      dateValidOperationSpec
    );
  }

  /**
   * Get null as date - this should throw or be unusable on the client side, depending on date
   * representation
   * @param datePath null as date (should throw)
   * @param options The options parameters.
   */
  dateNull(
    datePath: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datePath, options },
      dateNullOperationSpec
    );
  }

  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   * @param options The options parameters.
   */
  dateTimeValid(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      dateTimeValidOperationSpec
    );
  }

  /**
   * Get null as date-time, should be disallowed or throw depending on representation of date-time
   * @param dateTimePath null as date-time
   * @param options The options parameters.
   */
  dateTimeNull(
    dateTimePath: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { dateTimePath, options },
      dateTimeNullOperationSpec
    );
  }

  /**
   * Get 'lorem' encoded value as 'bG9yZW0' (base64url)
   * @param base64UrlPath base64url encoded value
   * @param options The options parameters.
   */
  base64Url(
    base64UrlPath: Uint8Array,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { base64UrlPath, options },
      base64UrlOperationSpec
    );
  }

  /**
   * Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array
   * format
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using
   *                  the csv-array format
   * @param options The options parameters.
   */
  arrayCsvInPath(
    arrayPath: string[],
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { arrayPath, options },
      arrayCsvInPathOperationSpec
    );
  }

  /**
   * Get the date 2016-04-13 encoded value as '1460505600' (Unix time)
   * @param unixTimeUrlPath Unix time encoded value
   * @param options The options parameters.
   */
  unixTimeUrl(
    unixTimeUrlPath: Date,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { unixTimeUrlPath, options },
      unixTimeUrlOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getBooleanTrueOperationSpec: coreClient.OperationSpec = {
  path: "/paths/bool/true/{boolPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.boolPath],
  headerParameters: [Parameters.accept],
  serializer
};
const getBooleanFalseOperationSpec: coreClient.OperationSpec = {
  path: "/paths/bool/false/{boolPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.boolPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const getIntOneMillionOperationSpec: coreClient.OperationSpec = {
  path: "/paths/int/1000000/{intPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.intPath],
  headerParameters: [Parameters.accept],
  serializer
};
const getIntNegativeOneMillionOperationSpec: coreClient.OperationSpec = {
  path: "/paths/int/-1000000/{intPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.intPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const getTenBillionOperationSpec: coreClient.OperationSpec = {
  path: "/paths/long/10000000000/{longPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.longPath],
  headerParameters: [Parameters.accept],
  serializer
};
const getNegativeTenBillionOperationSpec: coreClient.OperationSpec = {
  path: "/paths/long/-10000000000/{longPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.longPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const floatScientificPositiveOperationSpec: coreClient.OperationSpec = {
  path: "/paths/float/1.034E+20/{floatPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.floatPath],
  headerParameters: [Parameters.accept],
  serializer
};
const floatScientificNegativeOperationSpec: coreClient.OperationSpec = {
  path: "/paths/float/-1.034E-20/{floatPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.floatPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const doubleDecimalPositiveOperationSpec: coreClient.OperationSpec = {
  path: "/paths/double/9999999.999/{doublePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.doublePath],
  headerParameters: [Parameters.accept],
  serializer
};
const doubleDecimalNegativeOperationSpec: coreClient.OperationSpec = {
  path: "/paths/double/-9999999.999/{doublePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.doublePath1],
  headerParameters: [Parameters.accept],
  serializer
};
const stringUnicodeOperationSpec: coreClient.OperationSpec = {
  path: "/paths/string/unicode/{stringPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath],
  headerParameters: [Parameters.accept],
  serializer
};
const stringUrlEncodedOperationSpec: coreClient.OperationSpec = {
  path:
    "/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const stringUrlNonEncodedOperationSpec: coreClient.OperationSpec = {
  path: "/paths/string/begin!*'();:@&=+$,end/{stringPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath2],
  headerParameters: [Parameters.accept],
  serializer
};
const stringEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/paths/string/empty/{stringPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath3],
  headerParameters: [Parameters.accept],
  serializer
};
const stringNullOperationSpec: coreClient.OperationSpec = {
  path: "/paths/string/null/{stringPath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath4],
  headerParameters: [Parameters.accept],
  serializer
};
const enumValidOperationSpec: coreClient.OperationSpec = {
  path: "/paths/enum/green%20color/{enumPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.enumPath],
  headerParameters: [Parameters.accept],
  serializer
};
const enumNullOperationSpec: coreClient.OperationSpec = {
  path: "/paths/string/null/{enumPath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.enumPath],
  headerParameters: [Parameters.accept],
  serializer
};
const byteMultiByteOperationSpec: coreClient.OperationSpec = {
  path: "/paths/byte/multibyte/{bytePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.bytePath],
  headerParameters: [Parameters.accept],
  serializer
};
const byteEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/paths/byte/empty/{bytePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.bytePath1],
  headerParameters: [Parameters.accept],
  serializer
};
const byteNullOperationSpec: coreClient.OperationSpec = {
  path: "/paths/byte/null/{bytePath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.bytePath],
  headerParameters: [Parameters.accept],
  serializer
};
const dateValidOperationSpec: coreClient.OperationSpec = {
  path: "/paths/date/2012-01-01/{datePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.datePath],
  headerParameters: [Parameters.accept],
  serializer
};
const dateNullOperationSpec: coreClient.OperationSpec = {
  path: "/paths/date/null/{datePath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.datePath1],
  headerParameters: [Parameters.accept],
  serializer
};
const dateTimeValidOperationSpec: coreClient.OperationSpec = {
  path: "/paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.dateTimePath],
  headerParameters: [Parameters.accept],
  serializer
};
const dateTimeNullOperationSpec: coreClient.OperationSpec = {
  path: "/paths/datetime/null/{dateTimePath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.dateTimePath1],
  headerParameters: [Parameters.accept],
  serializer
};
const base64UrlOperationSpec: coreClient.OperationSpec = {
  path: "/paths/string/bG9yZW0/{base64UrlPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.base64UrlPath],
  headerParameters: [Parameters.accept],
  serializer
};
const arrayCsvInPathOperationSpec: coreClient.OperationSpec = {
  path:
    "/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.arrayPath],
  headerParameters: [Parameters.accept],
  serializer
};
const unixTimeUrlOperationSpec: coreClient.OperationSpec = {
  path: "/paths/int/1460505600/{unixTimeUrlPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.unixTimeUrlPath],
  headerParameters: [Parameters.accept],
  serializer
};
