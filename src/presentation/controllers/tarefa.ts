import { AddTodo } from "../../domain/models/add-tarefa";
import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/httpRequest";
import { HttpResponse } from "../protocols/httpResponse";

export class TarefaController implements Controller {
  constructor(private readonly addTarefa: AddTodo) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const camposObrigatorios = ["title"];
    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return new Promise((resolve) =>
          resolve({
            statusCode: 400,
            body: new Error(`Missing param ${campo}`),
          })
        );
      }
    }

    const { title } = httpRequest.body;

    const tarefa = await this.addTarefa.add({
      title,
      createdAt: new Date(),
    });
    return {
      statusCode: 200,
      body: tarefa,
    };
  }
}
