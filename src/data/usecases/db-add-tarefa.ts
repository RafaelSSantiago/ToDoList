import { Todo } from "../../domain/entities/todo";
import { AddTodo } from "../../domain/models/add-tarefa";

export class DbAddTarefa implements AddTodo {
  add(tarefa: Partial<Todo>): Promise<Todo> {
    return Promise.resolve(null as any);
  }
}
