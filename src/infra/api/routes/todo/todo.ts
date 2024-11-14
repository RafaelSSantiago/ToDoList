import { Router } from "express";
import { CreateTodoUseCase } from "../../../../userCases/todo/create/create.todo.usercase";
import { TodoRepository } from "../../../todo/repository/mongoDb/todo.repository";
import { InputCreateTodoDTOs } from "../../../../userCases/todo/create/create-todo.DTO";
import { MongoHelper } from "../../../helpers/mongoDb.helper";
import { GetAllTodosUseCase } from "../../../../userCases/todo/getAll/get-all-todos-usecase";
import { InputGetAllTodoDTOs } from "../../../../userCases/todo/getAll/getAll-todo.DTO";
import { FindTodoDTO } from "../../../../userCases/todo/find/find-todo-DTO";
import { FindTodoUseCase } from "../../../../userCases/todo/find/find-todo-usecase";

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

TodoRouter.get("/list/:id", async (req, res) => {
  const databaseClient = new MongoHelper();
  const usecase = new GetAllTodosUseCase(new TodoRepository(databaseClient));

  const input: InputGetAllTodoDTOs = {
    id: req.params.id as string,
  };

  try {
    const outPut = await usecase.execute(input);
    res.send(outPut);
  } catch (err) {
    res.status(500).send(err);
  }
});

TodoRouter.get("/:id", async (req, res) => {
  const databaseClient = new MongoHelper();
  const usecase = new FindTodoUseCase(new TodoRepository(databaseClient));

  const input: FindTodoDTO = {
    id: req.params.id as string,
  };

  try {
    const outPut = await usecase.execute(input);
    res.send(outPut);
  } catch (err) {
    res.status(500).send(err);
  }
});
