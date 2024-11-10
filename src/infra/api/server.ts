import { app } from "./express";

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
