/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import { KeyValue as KeyValueMapper } from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.keyset+json, application/json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const name: OperationQueryParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};

export const syncToken: OperationParameter = {
  parameterPath: "syncToken",
  mapper: {
    serializedName: "Sync-Token",
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "1.0",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const after: OperationQueryParameter = {
  parameterPath: ["options", "after"],
  mapper: {
    serializedName: "After",
    type: {
      name: "String"
    }
  }
};

export const acceptDatetime: OperationParameter = {
  parameterPath: ["options", "acceptDatetime"],
  mapper: {
    serializedName: "Accept-Datetime",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.kvset+json, application/json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const key: OperationQueryParameter = {
  parameterPath: ["options", "key"],
  mapper: {
    serializedName: "key",
    type: {
      name: "String"
    }
  }
};

export const label: OperationQueryParameter = {
  parameterPath: ["options", "label"],
  mapper: {
    serializedName: "label",
    type: {
      name: "String"
    }
  }
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const select1: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.kv+json, application/json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const key1: OperationURLParameter = {
  parameterPath: "key",
  mapper: {
    serializedName: "key",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const select2: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/vnd.microsoft.appconfig.kv+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const entity: OperationParameter = {
  parameterPath: ["options", "entity"],
  mapper: KeyValueMapper
};

export const select3: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const accept3: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue:
      "application/vnd.microsoft.appconfig.labelset+json, application/json, application/problem+json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const select4: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        defaultValue: "name",
        isConstant: true,
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const select5: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const select6: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$Select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
