import { Collection, MongoClient } from "mongodb";
import { DatabaseClient } from "./database-client.interface";
import env from "../api/env";

export class MongoHelper implements DatabaseClient {
  private client: MongoClient | null = null;

  async connect(): Promise<void> {
    this.client = await MongoClient.connect(env.mongoUrl);
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  }

  private async isConnected(): Promise<boolean> {
    if (!this.client) {
      return false;
    }
    try {
      await this.client.db().command({ ping: 1 });
      return true;
    } catch {
      return false;
    }
  }

  async getCollection(name: string): Promise<Collection> {
    if (!(await this.isConnected())) {
      await this.connect();
    }
    return this.client!.db().collection(name);
  }
}
