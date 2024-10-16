import { Todo } from "../../domain/entities/todo";
import { AddTodo } from "../../domain/models/add-tarefa";
import { TodoMongoRepository } from "../../infra/todo-mongo-repository";
import { IdGeneratorAdapter } from "../../main/adapters/id-generator-adapter";
import { AddTodoModel } from "../db/add-todo-repository";

export class DbAddTarefa implements AddTodo {
  constructor(
    private readonly idGenerator: IdGeneratorAdapter,
    private readonly addTodoRepository: TodoMongoRepository
  ) {}

  async add(tarefa: AddTodoModel): Promise<Todo> {
    const id = this.idGenerator.generate();
    tarefa.id = id
    const todo = await this.addTodoRepository.add(tarefa);
    return todo
  }
}
