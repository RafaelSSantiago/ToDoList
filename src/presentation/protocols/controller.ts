import { HttpRequest } from "./httpRequest";

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<any>;
}
