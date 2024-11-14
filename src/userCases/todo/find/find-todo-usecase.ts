import { TodoRepositoryInterface } from "../../../domain/todo/repository/todo-repository.interface";
import { FindTodoDTO } from "./find-todo-DTO";

export class FindTodoUseCase {
  constructor(private readonly todoRepository: TodoRepositoryInterface) {}

  execute(input: FindTodoDTO) {
    this.todoRepository.find(input.id)
  }
}