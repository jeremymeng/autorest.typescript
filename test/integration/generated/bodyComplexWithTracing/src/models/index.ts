/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttps from "@azure/core-https";

export type FishUnion = Fish | SalmonUnion | SharkUnion;
export type DotFishUnion = DotFish | DotSalmon;
export type MyBaseTypeUnion = MyBaseType | MyDerivedType;
export type SalmonUnion = Salmon | SmartSalmon;
export type SharkUnion = Shark | Sawshark | Goblinshark | Cookiecuttershark;

export interface Basic {
  /** Basic Id */
  id?: number | null;
  /** Name property with a very long description that does not fit on a single line and a line break. */
  name?: string;
  color?: CMYKColors;
}

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface IntWrapper {
  field1?: number;
  field2?: number;
}

export interface LongWrapper {
  field1?: number;
  field2?: number;
}

export interface FloatWrapper {
  field1?: number;
  field2?: number;
}

export interface DoubleWrapper {
  field1?: number;
  field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose?: number;
}

export interface BooleanWrapper {
  fieldTrue?: boolean;
  fieldFalse?: boolean;
}

export interface StringWrapper {
  field?: string;
  empty?: string;
  null?: string;
}

export interface DateWrapper {
  field?: Date;
  leap?: Date;
}

export interface DatetimeWrapper {
  field?: Date;
  now?: Date;
}

export interface Datetimerfc1123Wrapper {
  field?: Date;
  now?: Date;
}

export interface DurationWrapper {
  field?: string;
}

export interface ByteWrapper {
  field?: Uint8Array;
}

export interface ArrayWrapper {
  array?: string[];
}

export interface DictionaryWrapper {
  /** Dictionary of <string> */
  defaultProgram?: { [propertyName: string]: string } | null;
}

export interface Pet {
  id?: number;
  name?: string;
}

export interface Fish {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype:
    | "salmon"
    | "smart_salmon"
    | "shark"
    | "sawshark"
    | "goblin"
    | "cookiecuttershark";
  species?: string;
  length: number;
  siblings?: FishUnion[];
}

export interface DotFish {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishType: "DotSalmon";
  species?: string;
}

export interface DotFishMarket {
  sampleSalmon?: DotSalmon;
  salmons?: DotSalmon[];
  sampleFish?: DotFishUnion;
  fishes?: DotFishUnion[];
}

export interface ReadonlyObj {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly id?: string;
  size?: number;
}

export interface MyBaseType {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Kind1";
  propB1?: string;
  propBH1?: string;
}

export type Dog = Pet & {
  food?: string;
};

export type Cat = Pet & {
  color?: string;
  hates?: Dog[];
};

export type Salmon = Fish & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "salmon";
  location?: string;
  iswild?: boolean;
};

export type Shark = Fish & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "shark";
  age?: number;
  birthday: Date;
};

export type DotSalmon = DotFish & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishType: "DotSalmon";
  location?: string;
  iswild?: boolean;
};

export type MyDerivedType = MyBaseType & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Kind1";
  propD1?: string;
};

export type Siamese = Cat & {
  breed?: string;
};

export type SmartSalmon = Salmon & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "smart_salmon";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  collegeDegree?: string;
};

export type Sawshark = Shark & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "sawshark";
  picture?: Uint8Array;
};

export type Goblinshark = Shark & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "goblin";
  jawsize?: number;
  /** Colors possible */
  color?: GoblinSharkColor;
};

export type Cookiecuttershark = Shark & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  fishtype: "cookiecuttershark";
};

/** Known values of {@link CMYKColors} that the service accepts. */
export const enum KnownCMYKColors {
  Cyan = "cyan",
  Magenta = "Magenta",
  Yellow = "YELLOW",
  BlacK = "blacK"
}

/**
 * Defines values for CMYKColors. \
 * {@link KnownCMYKColors} can be used interchangeably with CMYKColors,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **cyan** \
 * **Magenta** \
 * **YELLOW** \
 * **blacK**
 */
export type CMYKColors = string;

/** Known values of {@link MyKind} that the service accepts. */
export const enum KnownMyKind {
  Kind1 = "Kind1"
}

/**
 * Defines values for MyKind. \
 * {@link KnownMyKind} can be used interchangeably with MyKind,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Kind1**
 */
export type MyKind = string;

/** Known values of {@link GoblinSharkColor} that the service accepts. */
export const enum KnownGoblinSharkColor {
  Pink = "pink",
  Gray = "gray",
  Brown = "brown",
  /** Uppercase RED */
  UpperRed = "RED",
  /** Lowercase RED */
  LowerRed = "red"
}

/**
 * Defines values for GoblinSharkColor. \
 * {@link KnownGoblinSharkColor} can be used interchangeably with GoblinSharkColor,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **pink** \
 * **gray** \
 * **brown** \
 * **RED**: Uppercase RED \
 * **red**: Lowercase RED
 */
export type GoblinSharkColor = string;

/** Contains response data for the getValid operation. */
export type BasicGetValidResponse = Basic;

/** Contains response data for the getInvalid operation. */
export type BasicGetInvalidResponse = Basic;

/** Contains response data for the getEmpty operation. */
export type BasicGetEmptyResponse = Basic;

/** Contains response data for the getNull operation. */
export type BasicGetNullResponse = Basic;

/** Contains response data for the getNotProvided operation. */
export type BasicGetNotProvidedResponse = Basic;

/** Contains response data for the getInt operation. */
export type PrimitiveGetIntResponse = IntWrapper;

/** Contains response data for the getLong operation. */
export type PrimitiveGetLongResponse = LongWrapper;

/** Contains response data for the getFloat operation. */
export type PrimitiveGetFloatResponse = FloatWrapper;

/** Contains response data for the getDouble operation. */
export type PrimitiveGetDoubleResponse = DoubleWrapper;

/** Contains response data for the getBool operation. */
export type PrimitiveGetBoolResponse = BooleanWrapper;

/** Contains response data for the getString operation. */
export type PrimitiveGetStringResponse = StringWrapper;

/** Contains response data for the getDate operation. */
export type PrimitiveGetDateResponse = DateWrapper;

/** Contains response data for the getDateTime operation. */
export type PrimitiveGetDateTimeResponse = DatetimeWrapper;

/** Contains response data for the getDateTimeRfc1123 operation. */
export type PrimitiveGetDateTimeRfc1123Response = Datetimerfc1123Wrapper;

/** Contains response data for the getDuration operation. */
export type PrimitiveGetDurationResponse = DurationWrapper;

/** Contains response data for the getByte operation. */
export type PrimitiveGetByteResponse = ByteWrapper;

/** Contains response data for the getValid operation. */
export type ArrayGetValidResponse = ArrayWrapper;

/** Contains response data for the getEmpty operation. */
export type ArrayGetEmptyResponse = ArrayWrapper;

/** Contains response data for the getNotProvided operation. */
export type ArrayGetNotProvidedResponse = ArrayWrapper;

/** Contains response data for the getValid operation. */
export type DictionaryGetValidResponse = DictionaryWrapper;

/** Contains response data for the getEmpty operation. */
export type DictionaryGetEmptyResponse = DictionaryWrapper;

/** Contains response data for the getNull operation. */
export type DictionaryGetNullResponse = DictionaryWrapper;

/** Contains response data for the getNotProvided operation. */
export type DictionaryGetNotProvidedResponse = DictionaryWrapper;

/** Contains response data for the getValid operation. */
export type InheritanceGetValidResponse = Siamese;

/** Contains response data for the getValid operation. */
export type PolymorphismGetValidResponse = FishUnion;

/** Contains response data for the getDotSyntax operation. */
export type PolymorphismGetDotSyntaxResponse = DotFishUnion;

/** Contains response data for the getComposedWithDiscriminator operation. */
export type PolymorphismGetComposedWithDiscriminatorResponse = DotFishMarket;

/** Contains response data for the getComposedWithoutDiscriminator operation. */
export type PolymorphismGetComposedWithoutDiscriminatorResponse = DotFishMarket;

/** Contains response data for the getComplicated operation. */
export type PolymorphismGetComplicatedResponse = SalmonUnion;

/** Contains response data for the putMissingDiscriminator operation. */
export type PolymorphismPutMissingDiscriminatorResponse = SalmonUnion;

/** Contains response data for the getValid operation. */
export type PolymorphicrecursiveGetValidResponse = FishUnion;

/** Contains response data for the getValid operation. */
export type ReadonlypropertyGetValidResponse = ReadonlyObj;

/** Contains response data for the getValid operation. */
export type FlattencomplexGetValidResponse = MyBaseTypeUnion;

/** Optional parameters. */
export interface BodyComplexWithTracingOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
