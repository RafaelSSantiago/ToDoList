import { Todo } from "../../../domain/todo/entities/todo";

export interface InputFindUserDto {
  id: string;
}

export interface OutPutFindUserDto {
  id: string;
  name: string;
  email: string;
  todo?: Todo[];
}

export class InputFindUserDtoValidator {
  static validate(input: InputFindUserDto) {
    if (!input.id) {
      throw new Error("Id is required");
    }
  }
}
