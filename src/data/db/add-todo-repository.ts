import { Todo } from "../../domain/entities/todo";

export interface AddTodoModel {
  id: string,
  title: string;
  createdAt: Date;
}

export interface AddTodoRepository {
  add(todoData: AddTodoModel): Promise<Todo>;
}
