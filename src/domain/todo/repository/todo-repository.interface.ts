import { RepositoryInterface } from "../../../shared/repository/repository-interface";
import { Todo } from "../entities/todo";

export interface TodoRepositoryInterface extends RepositoryInterface<Todo> {}
