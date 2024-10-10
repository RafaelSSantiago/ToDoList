import { Tarefa } from "../../domain/entities/tarefa";
import { AddTarefa } from "../../domain/models/add-tarefa";
import { DbAddTarefa } from "./db-add-tarefa";

interface SutTypes {
  sut: DbAddTarefa;
}

const makeSut = (): SutTypes => {
  const sut = new DbAddTarefa();

  return {
    sut,
  };
};

describe("DbAddTarefa UseCase", () => {
  test("Deve ser chamado com os valores corretos", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      nome: "any_nome",
      descricao: "any_descricao",
      data: "any_data",
      status: "string",
    };

    const addTarefaSpy = jest.spyOn(sut, "add");
    await sut.add(httpRequest);
    expect(addTarefaSpy).toHaveBeenCalledWith(httpRequest);
  });
});
