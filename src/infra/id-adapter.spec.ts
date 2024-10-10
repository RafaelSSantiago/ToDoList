import { IdGeneratorAdapter } from "./id-generator-adapter";
import uuid from "uuid";

jest.mock("uuid", () => ({
  v4(): string {
    return "any_id";
  },
}));

interface SutTypes {
  sut: IdGeneratorAdapter;
}
const makeSut = (): SutTypes => {
  const sut = new IdGeneratorAdapter();

  return {
    sut,
  };
};

describe("IdGenerator Adapter", () => {
  test("Deve retornar um id valido", () => {
    const { sut } = makeSut();
    const idReponse = sut.generate();
    expect(idReponse).toBeTruthy();
  });

  test("Deve retorna um id não vazio", () => {
    const { sut } = makeSut();
    const idReponse = sut.generate();
    expect(idReponse).not.toBe("");
  });

  test("Deve chamar o método generate corretamente", () => {
    const { sut } = makeSut();
    const generateSpy = jest.spyOn(sut, "generate");
    sut.generate();
    expect(generateSpy).toHaveBeenCalled();
  });

  test("Deve lidar com erro na biblioteca UUID", async () => {
    const { sut } = makeSut();
    jest.spyOn(uuid, "v4").mockRejectedValueOnce(new Error() as never);
    const promise = sut.generate();
    await expect(promise).rejects.toThrow();
  });
});
