import { Todo } from "../../domain/entities/todo";
import { AddTodo } from "../../domain/models/add-tarefa";
import { IdGeneratorAdapter } from "../../main/id-generator-adapter";

export class DbAddTarefa implements AddTodo {
  constructor(private readonly idGeneratorAdapter: IdGeneratorAdapter){}

  add(tarefa: Partial<Todo>): Promise<Todo> {
    return Promise.resolve(null as any);
  }
}
