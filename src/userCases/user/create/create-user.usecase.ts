import { CreateUserFactory } from "../../../domain/user/factory/create-user";
import { UserRepositoryInterface } from "../../../domain/user/repository/user-repository.interface";
import { InputCreateUserDTO, outPutCreateUserDTO } from "./create-user.DTO";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(input: InputCreateUserDTO): Promise<outPutCreateUserDTO> {
    const user = CreateUserFactory.create(input);

    await this.userRepository.create(user);

    return {
      id: user._id,
      name: user._name,
      email: user._email,
    };
  }
}
