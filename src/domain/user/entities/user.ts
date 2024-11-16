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
}
