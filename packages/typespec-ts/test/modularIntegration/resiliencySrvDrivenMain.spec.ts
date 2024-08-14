import { assert } from "chai";
import { ServiceDrivenClient } from "./generated/resiliency/srv-driven-main/src/index.js";
describe("Service Driven new Client v1", () => {
  let client: ServiceDrivenClient;

  beforeEach(() => {
    client = new ServiceDrivenClient("http://localhost:3002", "v2", {
      allowInsecureConnection: true,
      apiVersion: "v1"
    });
  });

  it("should work with none parameter", async () => {
    const result = await client.fromNone({
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with one optional parameter", async () => {
    const result = await client.fromOneOptional({
      parameter: "optional",
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with one required parameter", async () => {
    const result = await client.fromOneRequired("required", {
      newParameter: "new"
    });
    assert.isUndefined(result);
  });
});
describe("Service Driven new Client v2", () => {
  let client: ServiceDrivenClient;

  beforeEach(() => {
    client = new ServiceDrivenClient("http://localhost:3002", "v2", {
      allowInsecureConnection: true,
      apiVersion: "v2"
    });
  });

  it("should work with none parameter", async () => {
    const result = await client.fromNone({
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with one optional parameter", async () => {
    const result = await client.fromOneOptional({
      parameter: "optional",
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with one required parameter", async () => {
    const result = await client.fromOneRequired("required", {
      newParameter: "new"
    });
    assert.isUndefined(result);
  });

  it("should work with add operation", async () => {
    const result = await client.addOperation();
    assert.isUndefined(result);
  });
});
