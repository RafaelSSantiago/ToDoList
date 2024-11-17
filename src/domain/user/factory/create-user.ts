import { ObjectId } from "mongodb";
import { Todo } from "../../todo/entities/todo";
import { User } from "../entities/user";

interface CreateUserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
  todo?: Todo[];
}

export class CreateUserFactory {
  public static create(props: CreateUserProps): User {
    this.validate(props);
    props.id = new ObjectId().toHexString();

    return new User(props.id, props.name, props.email, props.password);
  }

  private static validate(props: CreateUserProps): void {
    if (!props.name || props.name.length < 3) {
      throw new Error("Name must be at least 3 characters long");
    }

    if (!props.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.email)) {
      throw new Error("Invalid email format");
    }

    if (!props.password || props.password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
  }
}
