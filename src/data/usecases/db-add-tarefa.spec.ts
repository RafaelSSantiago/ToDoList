import { Todo } from "../../domain/entities/todo";
import { IdGeneratorAdapter } from "../../main/adapters/id-generator-adapter";
import { AddTodoModel, AddTodoRepository } from "../db/add-todo-repository";
import { DbAddTarefa } from "./db-add-tarefa";

interface SutTypes {
  sut: DbAddTarefa;
}

const makeTodoMongoRepository = (): AddTodoRepository => {
  class TodoMongoRepository implements AddTodoRepository {
    add(todoData: AddTodoModel): Promise<Todo> {
      const todo = {
        id: "any_id",
        title: "any_title",
        completed: false,
        createdAt: new Date(),
        updateAt: new Date(),
      };

      return new Promise((resolve) => resolve(todo));
    }
  }

  return new TodoMongoRepository();
};

const makeSut = (): SutTypes => {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const todoMongoRepository = makeTodoMongoRepository();
  const sut = new DbAddTarefa(idGeneratorAdapter, todoMongoRepository);

  return {
    sut,
  };
};

describe("DbAddTarefa UseCase", () => {
  test("Deve ser chamado com os valores corretos", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      id: "any_id",
      title: "any_tarefa",
      createdAt: new Date(),
    };

    const addTarefaSpy = jest.spyOn(sut, "add");
    await sut.add(httpRequest);
    expect(addTarefaSpy).toHaveBeenCalledWith(httpRequest);
  });

  test("Deve retornar erro se for chamado sem o titul", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      id: "any_id",
      title: "any_tarefa",
      createdAt: new Date(),
    };

    const addTarefaSpy = jest.spyOn(sut, "add");
    await sut.add(httpRequest);
    expect(addTarefaSpy).toHaveBeenCalledWith(httpRequest);
  });
});
