import { Request, Response } from "express";
import { Controller } from "../../presentation/protocols/controller";
import { HttpRequest } from "../../presentation/protocols/httpRequest";

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {

    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    console.log(httpResponse);
    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    }
  };
};
