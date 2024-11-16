import { ObjectId } from "mongodb";
import { DatabaseClient } from "../../../helpers/database-client.interface";
import { User } from "../../../../domain/user/entities/user";
import { UserRepositoryInterface } from "../../../../domain/user/repository/user-repository.interface";
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly databaseClient: DatabaseClient) {}

  async create(entity: User): Promise<void> {
    const todo = await this.databaseClient.getCollection("user");
    const body = entity.toObjectWithoutId();

    await todo.insertOne({
      _id: new ObjectId(entity._id),
      ...body,
    });
  }

  async find(id: string): Promise<User> {
    const user = await this.databaseClient.getCollection("user");
    const data = await user.findOne({ _id: new ObjectId(id as unknown as number) });

    return new User(data?.id, data?.name, data?.email, data?.password, data?.todo);
  }

  async update(entity: User): Promise<void> {
    const user = await this.databaseClient.getCollection("user");
    const { _id, ...data } = entity;

    await user.updateOne({ _id: new ObjectId(_id) }, { $set: data });
  }
}
