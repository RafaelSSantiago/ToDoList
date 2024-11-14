import { Todo } from "../entities/todo";
import crypto from "crypto";

interface AddTodoProps {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  updateAt?: Date;
  completed?: boolean;
}

export class TodoFactory {
  public static create(props: AddTodoProps): Todo {
    props.id = crypto.randomUUID();
    props.updateAt = new Date();
    props.createdAt = new Date();
    props.completed = false;

    return new Todo(props.id, props.title, props.description, props.createdAt, props.updateAt, props.completed);
  }
}
