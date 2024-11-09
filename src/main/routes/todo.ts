import { Router } from "express";
import { TarefaController } from "../../presentation/controllers/tarefa";
import { adaptRoute } from "../adapters/express";
import { DbAddTarefa } from "../../data/usecases/db-add-tarefa";
import { IdGeneratorAdapter } from "../adapters/id-generator-adapter";
import { TodoMongoRepository } from "../../infra/todo-mongo-repository";

export default (router: Router): void => {
  const addTodoRepository = new TodoMongoRepository();
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const addTarefa = new DbAddTarefa(idGeneratorAdapter, addTodoRepository);
  router.post("/todo", adaptRoute(new TarefaController(addTarefa)));
};
