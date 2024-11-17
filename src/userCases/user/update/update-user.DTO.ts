import { User } from "../../../domain/user/entities/user";
import { UserValidator } from "../../../shared/validators/user-validator";

export interface InputUpdateUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class InputUpdateUserDtoValidator {
  static validate(input: InputUpdateUserDTO) {
    const validators = new Map<string, (value: any) => void>([
      ["name", (value) => UserValidator.validateName(value)],
      ["email", (value) => UserValidator.validateEmail(value)],
      ["password", (value) => UserValidator.validatePassword(value)],
    ]);

    for (const [key, value] of Object.entries(input)) {
      if (value === null || value === undefined || value === "") {
        throw Error(`Field ${key} should not be empty`);
      }

      const validator = validators.get(key);
      if (validator) {
        validator(value);
      }
    }
  }
}
