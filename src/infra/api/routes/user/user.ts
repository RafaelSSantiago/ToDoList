import { Router, Request, Response } from "express";
import { MongoHelper } from "../../../helpers/mongoDb.helper";
import { CreateUserUseCase } from "../../../../userCases/user/create/create-user.usecase";
import { UserRepository } from "../../../user/repository/mongoDb/user.repository";
import { InputCreateUserDTO } from "../../../../userCases/user/create/create-user.DTO";
import { InputFindUserDto } from "../../../../userCases/user/find/find-todo.DTO";
import { FindUserUseCase } from "../../../../userCases/user/find/find-user.usecase";
import { InputUpdateUserDTO } from "../../../../userCases/user/update/update-user.DTO";
import { UpdateUserUseCase } from "../../../../userCases/user/update/update-user.usecase";

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

UserRouter.get("/", async (req: Request, res: Response) => {
  const databaseClient = new MongoHelper();
  const useCase = new FindUserUseCase(new UserRepository(databaseClient));

  const input: InputFindUserDto = {
    id: req.body.id,
  };

  try {
    const outPut = await useCase.execute(input);
    res.send(outPut);
  } catch (err) {
    res.status(500).send(err);
  }
});

UserRouter.put("/:id", async (req: Request, res: Response) => {
  const databaseClient = new MongoHelper();
  const useCase = new UpdateUserUseCase(new UserRepository(databaseClient));

  const input: InputUpdateUserDTO = {
     id: req.query.id,
    ...(req.body.name && { name: req.body.name }),
    ...(req.body.email && { email: req.body.email }),
    ...(req.body.password && { password: req.body.password }),
  };

  try {
    const outPut = await useCase.execute(input);
    res.send(outPut);
  } catch (err) {
    res.status(500).send(err);
  }
});
