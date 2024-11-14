import { Todo } from "../../../domain/todo/entities/todo";
import { TodoRepositoryInterface } from "../../../domain/todo/repository/todo-repository.interface";
import { InputGetAllTodoDTOs } from "./getAll-todo.DTO";

export class GetAllTodosUseCase {
  constructor(private todoRepository: TodoRepositoryInterface) {}

  async execute(input: InputGetAllTodoDTOs): Promise<Todo[]> {
    return await this.todoRepository.findAll(input.id);
  }
}
