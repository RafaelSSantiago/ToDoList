import { Collection, MongoClient } from "mongodb";

export const MongoHelper = {
  client: null as MongoClient | any,
  uri: null as string | null,

  async connect(uri: string): Promise<void> {
     if (!uri || typeof uri !== "string" || !uri.startsWith("mongodb")) {
       throw new Error("Invalid MongoDB URI");
     }
    this.uri = uri;
    this.client = await MongoClient.connect(uri);
  },

  async disconnect() {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  },

  async isMongoConnected() {
    try {
      await this.client.db().command({ ping: 1 });
      return true;
    } catch (err) {
      return false;
    }
  },

  async getCollection(name: string): Promise<Collection> {
    if (!(await this.isMongoConnected())) {
      await this.connect(this.uri as string);
    }
    return this.client.db().collection(name);
  },
};
