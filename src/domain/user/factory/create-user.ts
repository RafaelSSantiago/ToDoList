import { Todo } from "../../todo/entities/todo";
import { User } from "../entities/user";
import crypto from "crypto";

interface CreateUserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  todo?: Todo[];
}

export class CreateUser {
  public static Create(props: CreateUserProps): User {
    props.id = crypto.randomUUID();

    return new User(props.id, props.name, props.email, props.password);
  }
}
