export class UserValidator {
  static validateName(name: string): void {
    if (!name || name.length < 3) {
      throw new Error("Name must be at least 3 characters long");
    }
  }

  static validateEmail(email: string): void {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Invalid email format");
    }
  }

  static validatePassword(password: string): void {
    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
  }
}
