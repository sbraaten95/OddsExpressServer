import "dotenv/config";

import express from "express";
import models, { connectDb } from "./models/index.js";

import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { NODE_ENV, PORT } from "./config.js";

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/auth/login", (req, res) => {
  console.log("yo");
});

connectDb().then(async () => {
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
});
