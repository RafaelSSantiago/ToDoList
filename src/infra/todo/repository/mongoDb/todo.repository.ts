import { ObjectId } from "mongodb";
import { Todo } from "../../../../domain/todo/entities/todo";
import { TodoRepositoryInterface } from "../../../../domain/todo/repository/todo-repository.interface";
import { DatabaseClient } from "../../../helpers/database-client.interface";
export class TodoRepository implements TodoRepositoryInterface {
  constructor(private readonly databaseClient: DatabaseClient) {}

  async create(entity: Todo): Promise<void> {
    const todo = await this.databaseClient.getCollection("todo");
    const { _id, ...data } = entity;

    await todo.insertOne({
      _id: new ObjectId(),
      ...data,
    });
  }

  async find(id: string): Promise<Todo> {
    const todo = await this.databaseClient.getCollection("todo");
    const data = await todo.findOne({ _id: new ObjectId(id as unknown as number) });

    return new Todo(
      String(data?._id),
      data?.title,
      data?.description,
      data?.createdAt,
      data?.updateAt,
      data?.completed
    );
  }

  async findAll(id: string): Promise<Todo[]> {
    const todo = await this.databaseClient.getCollection("todo");

    const todoList = await todo.find({ id: id }).toArray();

    const data: Todo[] = todoList.map((todo) => {
      return new Todo(
        String(todo?._id),
        todo?.title,
        todo?.description,
        todo?.createdAt,
        todo?.updateAt,
        todo?.completed
      );
    });

    return data;
  }

  async update(entity: Todo): Promise<void> {
    const todo = await this.databaseClient.getCollection("todo");
    const { _id, ...data } = entity;

    await todo.updateOne({ _id: new ObjectId(_id) }, { $set: data });
  }
}
