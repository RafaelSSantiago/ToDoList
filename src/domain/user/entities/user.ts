import { Todo } from "../../todo/entities/todo";

export class User {
  constructor(
    private readonly id: string,
    private name: string,
    private email: string,
    private password: string,
    private todo?: Todo[]
  ) {}

  get _name() {
    return this.name;
  }

  get _id() {
    return this.id;
  }

  get _email() {
    return this.email;
  }

  get _todos() {
    return this.todo;
  }

  toObjectWithoutId() {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      todo: this.todo,
    };
  }
}
