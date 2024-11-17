import {
  CreateRepositoryInterface,
  FindRepositoryInterface,
  UpdateRepositoryInterface,
} from "../../../shared/repository/repository-interface";
import { User } from "../entities/user";

export interface UserRepositoryInterface extends CreateRepositoryInterface<User>, FindRepositoryInterface<User>, UpdateRepositoryInterface<User> {}
