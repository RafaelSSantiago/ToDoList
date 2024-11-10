import { ObjectId } from "mongodb";
import { Todo } from "../../../../domain/todo/entities/todo";
import { TodoRepositoryInterface } from "../../../../domain/todo/repository/todo-repository.interface";
import { MongoHelper } from "../../../helpers/mongoDb.helper";
export class TodoRepository implements TodoRepositoryInterface {
  private mongoHelper;

  constructor() {
    this.mongoHelper = new MongoHelper();
  }
  async create(entity: Todo): Promise<void> {
    const todo = await this.mongoHelper.getCollection("todo");
    const { _id, ...datas } = entity;
    await todo.insertOne({
      _id: new ObjectId(_id),
      ...datas,
    });
  }

  async find(entity: Todo): Promise<Todo> {
    const todo = await this.mongoHelper.getCollection("todo");
    const data = await todo.findOne({ _id: new ObjectId(entity._id) });

    return new Todo(
      String(data?._id),
      data?.title,
      data?.description,
      data?.createdAt,
      data?.updateAt,
      data?.completed
    );
  }

  async findAll(entity: Todo): Promise<Todo[]> {
    const todo = await this.mongoHelper.getCollection("todo");
    const todoList = await todo.find({ id: new ObjectId(entity._id) }).toArray();

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
    const todo = await this.mongoHelper.getCollection("todo");
    const { _id, ...data } = entity;

    await todo.updateOne({ _id: new ObjectId(_id) }, { $set: data });
  }
}
