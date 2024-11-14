import { Collection } from "mongodb";

export interface DatabaseClient {
  connect(uri: string): Promise<void>;
  disconnect(): Promise<void>;
  getCollection(name: string): Promise<Collection>;
}
