import { Tarefa } from "../../domain/entities/tarefa";
import { AddTarefa } from "../../domain/models/add-tarefa";
import { TarefaController } from "./tarefa";

const makeAddTarefaStub = (): AddTarefa => {
  class addTarefaStub implements AddTarefa {
    async add(tarefa: Omit<Tarefa, "userId">): Promise<Omit<Tarefa, "userId">> {
      return {
        id: "any_id",
        data: "any_data",
        descricao: "any_descricao",
        nome: "any_nome",
        status: "any_status",
      };
    }
  }

  return new addTarefaStub();
};

interface SutTypes {
  sut: TarefaController;
  addTarefa: AddTarefa;
}

const makeSut = (): SutTypes => {
  const addTarefa = makeAddTarefaStub();
  const sut = new TarefaController(addTarefa);

  return {
    sut,
    addTarefa,
  };
};

describe("TarefaController", () => {
  test("Deve retornar error se não tiver nome da tarefa", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        descricao: "any_descricao",
        data: "any_data",
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(new Error("Missing param nome"));
  });

  test("Deve retornar error se não tiver a descrição da tarefa", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        nome: "any_nome",
        data: "any_data",
        status: "any_status",
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(new Error("Missing param descricao"));
  });

  test("Deve retornar error se não tiver a data da tarefa", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        nome: "any_nome",
        descricao: "any_descricao",
        status: "any_status",
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(new Error("Missing param data"));
  });

  test("Deve Adicionar uma tarefa", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        nome: "any_nome",
        descricao: "any_descricao",
        status: "any_status",
        data: "any_data",
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual({
      nome: "any_nome",
      descricao: "any_descricao",
      data: "any_data",
      id: "any_id",
      status: "any_status",
    });
  });
});
