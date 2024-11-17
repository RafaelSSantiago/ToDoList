import { ObjectId } from "mongodb";
import { Todo } from "../../todo/entities/todo";
import { User } from "../entities/user";
import { UserValidator } from "../../../shared/validators/user-validator";

interface CreateUserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
  todo?: Todo[];
}

export class CreateUserFactory {
  public static create(props: CreateUserProps): User {
    UserValidator.validateName(props.name);
    UserValidator.validateName(props.email);
    UserValidator.validateName(props.password);
    props.id = new ObjectId().toHexString();

    return new User(props.id, props.name, props.email, props.password);
  }

}
