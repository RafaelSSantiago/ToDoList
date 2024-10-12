import { Todo } from "../entities/todo";

export interface AddTodo {
  add(Todo: Partial<Todo>): Promise<Todo>;
}
