import { Tarefa } from "../entities/tarefa";

export interface AddTarefa {
  add(tarefa: Omit<Tarefa, "id">): Promise<Tarefa>;
}
