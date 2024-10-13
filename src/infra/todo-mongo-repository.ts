import { AddTodoModel, AddTodoRepository } from "../data/db/add-todo-repository";
import { Todo } from "../domain/entities/todo";
import { MongoHelper } from "./helpers/mongo-helper";

export class TodoMongoRepository implements AddTodoRepository {
  async add(todoData: AddTodoModel): Promise<Todo> {
    const todoCollection = await MongoHelper.getCollection("todo");
    const result = await todoCollection.insertOne(todoData);
    const todo = await todoCollection.findOne({ _id: result.insertedId });

    return {
      id: String(todo?._id),
      title: todo?.title,
      completed: todo?.completed,
      createdAt: todo?.createdAt,
      updateAt: todo?.updateAt,
    };
  }
}
