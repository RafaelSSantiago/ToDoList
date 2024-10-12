import { AddTodo } from "../../domain/models/add-tarefa";
import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/httpRequest";

export class TarefaController implements Controller {
  constructor(private readonly addTarefa: AddTodo) {}

  async handle(httpRequest: HttpRequest): Promise<any> {
    const camposObrigatorios = ["title", "createdAt"];

    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return new Error(`Missing param ${campo}`);
      }
    }

    const { title } = httpRequest.body;

    const tarefa = await this.addTarefa.add({
      title,
      createdAt: new Date(),
    });

    return tarefa;
  }
}
