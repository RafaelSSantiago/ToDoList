export interface CreateRepositoryInterface<T> {
  create<K extends keyof T>(entity: Omit<T, K>): Promise<void>;
}

export interface UpdateRepositoryInterface<T> {
  update(entity: Partial<T>): Promise<void>;
}

export interface FindRepositoryInterface<T> {
  find(id: string): Promise<T>;
}

export interface FindAllRepositoryInterface<T> {
  findAll(id: string): Promise<T[]>;
}
