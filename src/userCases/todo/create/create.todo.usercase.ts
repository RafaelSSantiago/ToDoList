import { TodoFactory } from "../../../domain/todo/factory/todo-factory";
import { TodoRepositoryInterface } from "../../../domain/todo/repository/todo-repository.interface";
import { InputCreateTodoDTOs, OutputCreateTodoDTOs } from "./create-todo.DTO";

export class CreateTodoUseCase {
  constructor(private todoRepository: TodoRepositoryInterface) {}

  async execute(input: InputCreateTodoDTOs): Promise<OutputCreateTodoDTOs> {
    const todo = TodoFactory.create(input);

    await this.todoRepository.create(todo);

    return {
      id: todo._id,
      title: todo._title,
      description: todo._description,
      completed: todo._completed,
      createdAt: todo._createdAt,
    };
  }
}
