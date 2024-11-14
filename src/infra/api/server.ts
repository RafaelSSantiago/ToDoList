import { app } from "./express";
import { MongoHelper } from "../helpers/mongoDb.helper";
import { router } from "./routes";

const port = process.env.PORT || 3000;

const MongoClient = new MongoHelper();

app.use("/api", router);

MongoClient.connect()
  .then((res) => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("deu erro", err));
