import { UserRepositoryInterface } from "../../../domain/user/repository/user-repository.interface";
import { InputFindUserDto, InputFindUserDtoValidator, OutPutFindUserDto } from "./find-todo.DTO";

export class FindUserUseCase {
  constructor(private userRespository: UserRepositoryInterface) {}

  async execute(input: InputFindUserDto): Promise<OutPutFindUserDto> {
    InputFindUserDtoValidator.validate(input);

    const user = await this.userRespository.find(input.id);

    return {
      id: user._id,
      name: user._name,
      email: user._email,
      todo: user._todos,
    };
  }
}
