import { Tarefa } from "../../domain/entities/tarefa";
import { AddTarefa } from "../../domain/models/add-tarefa";

export class DbAddTarefa implements AddTarefa {
  add(tarefa: Omit<Tarefa, "id">): Promise<Tarefa> {
    return Promise.resolve(null as any);
  }
}
