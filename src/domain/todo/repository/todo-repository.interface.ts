import {
  CreateRepositoryInterface,
  FindAllRepositoryInterface,
  FindRepositoryInterface,
  UpdateRepositoryInterface,
} from "../../../shared/repository/repository-interface";
import { Todo } from "../entities/todo";

export interface TodoRepositoryInterface extends
    CreateRepositoryInterface<Todo>,
    FindRepositoryInterface<Todo>,
    UpdateRepositoryInterface<Todo>,
    FindAllRepositoryInterface<Todo> {}
