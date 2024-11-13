import { Router } from "express";
import { CreateTodoUseCase } from "../../../userCases/todo/create/create.todo.usercase";
import { TodoRepository } from "../../todo/repository/mongoDb/todo.repository";
import { InputCreateTodoDTOs } from "../../../userCases/todo/create/create-todo.DTO";
import { MongoHelper } from "../../helpers/mongoDb.helper";

export const TodoRouter = Router();

TodoRouter.post("/", async (req, res) => {
  const databaseClient = new MongoHelper();
  const usecase = new CreateTodoUseCase(new TodoRepository(databaseClient));

  try {
    const input: InputCreateTodoDTOs = {
      title: req.body.title,
      description: req.body.description,
    };

    const outPut = usecase.execute(input);
    res.send(outPut);
  } catch (err) {
    res.status(500).send(err);
  }
});
