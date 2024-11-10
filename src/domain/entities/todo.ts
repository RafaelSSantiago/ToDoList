export class Todo {
  constructor(
    private readonly id: string,
    private readonly title: string,
    private description: string,
    private readonly createdAt: Date,
    private updateAt: Date,
    private completed: boolean
  ) {}

  get _title() {
    return this.title;
  }

  get _createdAt() {
    return this.createdAt;
  }

  get _description() {
    return this.description;
  }

  set _description(description: string) {
    if (!description) {
      throw new Error("Description cannot be empty");
    }
    this.description = description;
  }

  get _updateAt() {
    return this.updateAt;
  }

  set _updateAt(updateAt: Date) {
    if (updateAt <= this._createdAt) {
      throw new Error("Update date cannot be before creation date");
    }
    this.updateAt = updateAt;
  }

  get _completed() {
    return this.completed;
  }

  set _completed(completed: boolean) {
    this.completed = completed;
  }
}
