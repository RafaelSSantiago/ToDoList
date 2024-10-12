import { IdGenerator } from "../domain/models/id-generator";
import { v4 as uuidv4 } from "uuid";

export class IdGeneratorAdapter implements IdGenerator {
  generate(): string {
    const id = uuidv4();
    return id;
  }
}
