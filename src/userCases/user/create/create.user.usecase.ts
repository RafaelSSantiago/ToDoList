import { UserRepositoryInterface } from "../../../domain/user/repository/user-repository.interface";
import { InputCreateUserDTO } from "./create-user.DTO";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  execute(input: InputCreateUserDTO) {

    const payload = {
      ...input
    }
    this.userRepository.create(input)
  }
}