import { UserRepositoryInterface } from "../../../domain/user/repository/user-repository.interface";
import { InputUpdateUserDTO, InputUpdateUserDtoValidator } from "./update-user.DTO";

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(input: InputUpdateUserDTO): Promise<void> {
    InputUpdateUserDtoValidator.validate(input);
    await this.userRepository.update(input);
  }
}
