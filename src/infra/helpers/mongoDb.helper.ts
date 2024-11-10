import { Collection, MongoClient } from "mongodb";
export class MongoHelper {
  private client: MongoClient | null = null;
  private uri: string | null = null;

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri);
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
      await this.connect(this.uri as string);
    }
    return this.client!.db().collection(name);
  }
}
