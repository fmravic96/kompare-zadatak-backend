import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

import { dbConnection } from "./models";
import routes from "./routes";

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use("/", routes);

const DB_URI: string = process.env.DB_URI!;

dbConnection(DB_URI).then(async () => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
