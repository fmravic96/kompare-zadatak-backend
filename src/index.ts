import express from "express";
import cors from "cors";
import "dotenv/config";

import { dbConnection } from "./models";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use("/", routes);

dbConnection(process.env.DB_URI!).then(async () => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
