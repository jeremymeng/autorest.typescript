import {
  CodeModel,
  GroupSchema,
  GroupProperty,
  ObjectSchema
} from "@autorest/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { ObjectDetails, ObjectKind } from "../models/modelDetails";
import { transformProperty } from "./objectTransforms";

export function transformGroups(codeModel: CodeModel, useCoreV2: boolean) {
  codeModel.schemas.groups = codeModel.schemas.groups || [];
  const objectDetails = [];
  for (const grp of codeModel.schemas.groups) {
    objectDetails.push(transformGroup(grp, useCoreV2));
  }
  return objectDetails;
  // return (codeModel.schemas.groups || []).map(transformGroup);
}

function transformGroup(
  { language, properties }: GroupSchema,
  useCoreV2: boolean
): ObjectDetails {
  const { name, description } = getLanguageMetadata(language);
  properties = properties || [];
  const groupProperties = [];
  for (const prop of properties) {
    groupProperties.push(transformProperty(prop, useCoreV2));
  }
  // const groupProperties = (properties || []).map(transformProperty);
  return {
    children: [],
    parents: [],
    hasAdditionalProperties: false,
    kind: ObjectKind.Basic,
    name,
    // Groups are created by modelerfour so they don't have a serializedName
    serializedName: name,
    description: description || undefined,
    schema: new ObjectSchema(name, description),
    properties: groupProperties
  };
}
