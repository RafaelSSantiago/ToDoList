import { Router, Request, Response } from "express";
import { MongoHelper } from "../../../helpers/mongoDb.helper";
import { CreateUserUseCase } from "../../../../userCases/user/create/create.user.usecase";
import { UserRepository } from "../../../user/repository/mongoDb/user.repository";
import { InputCreateUserDTO } from "../../../../userCases/user/create/create-user.DTO";

export const UserRouter = Router();

UserRouter.post("/", async (req: Request, res: Response) => {
  const databaseClient = new MongoHelper();
  const usecase = new CreateUserUseCase(new UserRepository(databaseClient));

  const input: InputCreateUserDTO = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  };

  try {
    const outPut = await usecase.execute(input);
    res.send(outPut);
  } catch (err) {
    res.status(500).send(err);
  }
});
