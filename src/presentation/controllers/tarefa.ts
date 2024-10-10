import { Tarefa } from "../../domain/entities/tarefa";
import { AddTarefa } from "../../domain/models/add-tarefa";
import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/httpRequest";

export class TarefaController implements Controller {
  constructor(private readonly addTarefa: AddTarefa) {}

  async handle(httpRequest: HttpRequest): Promise<any> {
    const camposObrigatorios = ["nome", "descricao", "data"];

    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return new Error(`Missing param ${campo}`);
      }
    }

    const { descricao, nome, data, status } = httpRequest.body;

    const tarefa = await this.addTarefa.add({
      nome,
      descricao,
      data,
      status,
    });

    return tarefa;
  }
}
