import { Todo } from "../../domain/entities/todo";
import { AddTodo } from "../../domain/models/add-tarefa";
import { TarefaController } from "./tarefa";

const makeAddTarefaStub = (): AddTodo => {
  class AddTodoStub implements AddTodo {
    async add(tarefa: Omit<Todo, "id">): Promise<Todo> {
      return {
        id: "any_id",
        title: "any_id",
        completed: false,
        createdAt: new Date(),
        updateAt: new Date(),
      };
    }
  }

  return new AddTodoStub();
};

interface SutTypes {
  sut: TarefaController;
  addTodo: AddTodo;
}

const makeSut = (): SutTypes => {
  const addTodo = makeAddTarefaStub();
  const sut = new TarefaController(addTodo);

  return {
    sut,
    addTodo,
  };
};

describe("TarefaController", () => {
  test("Deve retornar error se não tiver title da tarefa", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        createdAt: new Date(),
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.body).toEqual(new Error("Missing param title"));
  });

  test("Deve retornar error se não tiver a data da tarefa", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        title: "any_title",
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.body).toEqual(new Error("Missing param createdAt"));
  });

  test("Deve Adicionar uma tarefa", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        title: "any_title",
        createdAt: new Date(),
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.body).toEqual({
      id: "any_id",
      title: "any_id",
      completed: false,
      createdAt: new Date(),
      updateAt: new Date(),
    });
  });
});
