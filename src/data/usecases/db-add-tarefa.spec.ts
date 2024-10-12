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
      title: "any_tarefa",
      createdAt: new Date(),
    };

    const addTarefaSpy = jest.spyOn(sut, "add");
    await sut.add(httpRequest);
    expect(addTarefaSpy).toHaveBeenCalledWith(httpRequest);
  });
});
