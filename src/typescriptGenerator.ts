// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as prettier from "prettier";
import { CodeModel } from "@autorest/codemodel";
import { Project, IndentationText } from "ts-morph";
import { Host } from "@autorest/extension-base";
import { PackageDetails } from "./models/packageDetails";
import { transformCodeModel } from "./transforms/transforms";

import { generateClient } from "./generators/clientFileGenerator";
import { generateClientContext } from "./generators/clientContextFileGenerator";
import { generateModels } from "./generators/modelsGenerator";
import { generateMappers } from "./generators/mappersGenerator";
import { generateIndexFile } from "./generators/indexGenerator";
import { generatePackageJson } from "./generators/static/packageFileGenerator";
import { generateApiExtractorConfig } from "./generators/static/apiExtractorConfig";
import { generateLicenseFile } from "./generators/static/licenseFileGenerator";
import { generateReadmeFile } from "./generators/static/readmeFileGenerator";
import { generateTsConfig } from "./generators/static/tsConfigFileGenerator";
import { generateRollupConfig } from "./generators/static/rollupConfigFileGenerator";
import { generateOperations } from "./generators/operationGenerator";
import { generateParameters } from "./generators/parametersGenerator";
import { generateLROFiles } from "./generators/LROGenerator";
import { generateTracingFile } from "./generators/tracingFileGenerator";
import { TracingInfo } from "./models/clientDetails";

const prettierTypeScriptOptions: prettier.Options = {
  parser: "typescript",
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2
};

const prettierJSONOptions: prettier.Options = {
  parser: "json",
  tabWidth: 2,
  semi: false,
  singleQuote: false
};

export async function generateTypeScriptLibrary(
  codeModel: CodeModel,
  host: Host
): Promise<void> {
  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });

  const srcPath =
    ((await host.GetValue("source-code-folder-path")) as string) || "src";

  const clientDetails = await transformCodeModel(codeModel, host);
  clientDetails.srcPath = srcPath;

  clientDetails.tracing = await getTracingInfo(host);

  const packageName =
    (await host.GetValue("package-name")) || clientDetails.name;
  const packageNameParts = packageName.match(/(^@(.*)\/)?(.*)/);
  const packageDetails: PackageDetails = {
    name: packageName,
    scopeName: packageNameParts[2],
    nameWithoutScope: packageNameParts[3],
    description: clientDetails.description,
    version: (await host.GetValue("package-version")) || "1.0.0"
  };

  const shouldGenerateLicense: boolean =
    (await host.GetValue("license-header")) || false;

  const hideClients: boolean = (await host.GetValue("hide-clients")) || false;
  const useCoreV2: boolean = (await host.GetValue("use-core-v2")) || false;

  // Skip metadata generation if `generate-metadata` is explicitly false
  if ((await host.GetValue("generate-metadata")) !== false) {
    generatePackageJson(clientDetails, packageDetails, project, useCoreV2);
    generateLicenseFile(project, shouldGenerateLicense);
    generateReadmeFile(clientDetails, packageDetails, project);
    generateTsConfig(project);
    generateRollupConfig(clientDetails, packageDetails, project, useCoreV2);
    generateApiExtractorConfig(clientDetails, project);
  }

  generateClient(clientDetails, project, hideClients, useCoreV2);
  generateClientContext(
    clientDetails,
    packageDetails,
    project,
    hideClients,
    useCoreV2
  );
  generateModels(clientDetails, project, useCoreV2);

  generateMappers(clientDetails, project, useCoreV2);
  generateOperations(clientDetails, project, useCoreV2);
  generateParameters(clientDetails, project, useCoreV2);
  generateIndexFile(clientDetails, project);
  await generateLROFiles(clientDetails, project, useCoreV2);
  generateTracingFile(clientDetails, project, useCoreV2);

  const licenseHeader = `
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
`;

  // Save the source files to the virtual filesystem
  project.saveSync();
  const fs = project.getFileSystem();

  // Loop over the files
  for (const file of project.getSourceFiles()) {
    const filePath = file.getFilePath();
    const isJson = /\.json$/gi.test(filePath);
    const isSourceCode = /\.(ts|js)$/gi.test(filePath);
    let fileContents = fs.readFileSync(filePath);

    // Add the license header to source code files
    if (shouldGenerateLicense && isSourceCode) {
      fileContents = `${licenseHeader.trimLeft()}\n${fileContents}`;
    }

    // Format the contents if necessary
    if (isJson || isSourceCode) {
      fileContents = prettier.format(
        fileContents,
        isJson ? prettierJSONOptions : prettierTypeScriptOptions
      );
    }

    // Write the file to the AutoRest host
    host.WriteFile(
      filePath.substr(1), // Get rid of the leading slash '/'
      fileContents
    );
  }
}

async function getTracingInfo(host: Host): Promise<TracingInfo | undefined> {
  const tracing: TracingInfo | undefined =
    (await host.GetValue("tracing-info")) || undefined;

  if (tracing && tracing.namespace && tracing.packagePrefix) {
    return tracing;
  }

  const namespace =
    (await host.GetValue("tracing-info.namespace")) || undefined;
  const packagePrefix =
    (await host.GetValue("tracing-info.packagePrefix")) || undefined;

  if (packagePrefix && namespace) {
    return {
      namespace,
      packagePrefix
    };
  }

  if (!tracing && !packagePrefix && !namespace) {
    return undefined;
  }

  throw new Error(
    "Invalid tracing-info. Make sure that namespace and packagePrefix are defined"
  );
}
