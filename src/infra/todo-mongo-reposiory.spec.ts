import { Collection } from "mongodb";

import env from "./../main/config/env";
import { MongoHelper } from "./helpers/mongo-helper";
import { TodoMongoRepository } from "./todo-mongo-repository";

let accountCollection: Collection;

const makeSut = (): any => {
  const sut = new TodoMongoRepository()
  return sut
};

describe("Todo Mongo Repository", () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection("todo");
    // await accountCollection.deleteMany({});
  });

  test("Deve retorna um todo adicionada com sucesso", async () => {
    const sut = makeSut();
    const todo = await sut.add({
      title: "any_title",
      createdAt: new Date(),
    });
  });
});
