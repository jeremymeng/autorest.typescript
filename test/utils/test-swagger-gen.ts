import { exec } from "child_process";

interface SwaggerConfig {
  swagger: string;
  clientName: string;
  packageName: string;
  addCredentials?: boolean;
}

const package_version = "1.0.0-preview1";
let whiteList: string[] = [];

const testSwaggers: { [name: string]: SwaggerConfig } = {
  azureReport: {
    swagger: "azure-report.json",
    clientName: "ReportClient",
    packageName: "zzzAzureReport"
  },
  bodyArray: {
    swagger: "body-array.json",
    clientName: "BodyArrayClient",
    packageName: "body-array"
  },
  bodyComplex: {
    swagger: "body-complex.json",
    clientName: "BodyComplexClient",
    packageName: "body-complex"
  },
  bodyString: {
    swagger: "body-string.json",
    clientName: "BodyStringClient",
    packageName: "body-string"
  },
  customUrl: {
    swagger: "custom-baseUrl.json",
    clientName: "CustomUrlClient",
    packageName: "custom-url"
  },
  header: {
    swagger: "header.json",
    clientName: "HeaderClient",
    packageName: "header"
  },
  mediaTypes: {
    swagger: "media_types.json",
    clientName: "MediaTypesClient",
    packageName: "media-types-service"
  },
  paging: {
    swagger: "paging.json",
    clientName: "PagingClient",
    packageName: "paging-service"
  },
  report: {
    swagger: "report.json",
    clientName: "ReportClient",
    packageName: "zzzReport"
  },
  url: { swagger: "url.json", clientName: "UrlClient", packageName: "url" },
  xmlservice: {
    swagger: "xml-service.json",
    clientName: "XmlServiceClient",
    packageName: "xml-service"
  }
};

const generateSwaggers = async (whiteList?: string[]) => {
  let generationTasks: Promise<void>[] = [];

  Object.keys(testSwaggers)
    .filter(name => {
      if (!whiteList || !whiteList.length) {
        return true;
      }
      return whiteList.includes(name);
    })
    .forEach(name => {
      const { addCredentials, clientName, swagger, packageName } = testSwaggers[
        name
      ];
      const autorestCommand = `autorest --add-credentials=${!!addCredentials} --typescript --output-folder=./test/integration/generated/${name} --use=. --title=${clientName} --input-file=node_modules/@microsoft.azure/autorest.testserver/swagger/${swagger} --package-name=${packageName} --package-version=${package_version}`;

      const generationTask = () => {
        return new Promise<void>((resolve, reject) => {
          exec(autorestCommand, (error, stdout, stderr) => {
            if (error) {
              reject(`Failed to generate ${name} with error: \n ${error}`);
              return;
            }
            console.log(`=== Start ${name} ===`);
            console.log(stdout);
            stderr && console.error(stderr);
            console.log(`=== End ${name} ===`);
            resolve();
          });
        });
      };

      generationTasks.push(generationTask());
    });

  try {
    await Promise.all(generationTasks);
  } catch (error) {
    console.error(error);
  }
};

const buildWhitelist = () =>
  process.argv.forEach((arg, index) => {
    if (arg !== "--include" && arg !== "-i") {
      return;
    }

    const includesValue = process.argv[index + 1];
    if (!includesValue) {
      console.warn(
        "No valid include list provided, generating all test swaggers"
      );
      return;
    }

    const swaggers = includesValue.split(",");

    swaggers.forEach(swagger => {
      const validSwaggers = Object.keys(testSwaggers);
      if (!validSwaggers.includes(swagger)) {
        throw new Error(
          `Unknown swagger ${swagger}, valid swaggers: \n ${JSON.stringify(
            validSwaggers
          )}`
        );
      }

      whiteList.push(swagger);
    });
  });

const buildAutorest = () => {
  if (!process.argv.includes("--build") && !process.argv.includes("-b")) {
    console.warn(
      "Not building Autorest.Typescript, use --build or -b to build"
    );
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    console.log("Building Autorest.Typescript");
    exec("npm run build", (error, stdout, stderror) => {
      if (error) {
        reject(
          `Failed to build autorest.typescript \n ${JSON.stringify(error)}`
        );
        return;
      }

      console.log(stdout);
      stderror && console.error(stderror);
      resolve();
    });
  });
};

const run = async () => {
  buildWhitelist();
  await buildAutorest();
  await generateSwaggers(whiteList);
};

run();
