import { MongoHelper as sut } from "./mongo-helper";
import env from "../../main/config/env";

describe("Mongo helper", () => {
  beforeAll(async () => {
    await sut.connect(env.mongoUrl);
  });

  afterAll(async () => {
    await sut.disconnect();
  });

  test("Deve reconectar if o mongodb cair", async () => {
    let todoCollection = await sut.getCollection("todo");
    expect(todoCollection).toBeTruthy();
    await sut.disconnect();
    todoCollection = await sut.getCollection("todo");
    expect(todoCollection).toBeTruthy();
  });
});
