import "dotenv/config";

import express from "express";
import models, { connectDb } from "./models/index.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDb().then(async () => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
