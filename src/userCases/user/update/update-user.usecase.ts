import { User } from "../../../domain/user/entities/user";
import { UserRepositoryInterface } from "../../../domain/user/repository/user-repository.interface";
import { InputUpdateUserDTO, InputUpdateUserDtoValidator } from "./update-user.DTO";

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(input: InputUpdateUserDTO): Promise<void> {
    InputUpdateUserDtoValidator.validate(input);

    const inputCasting: Partial<User> = {
      _id: input.id,
      ...(input.email && { _email: input.email }),
      ...(input.name && { _name: input.name }),
      ...(input.password && { _password: input.password }),
    };

    await this.userRepository.update(inputCasting);
  }
}
