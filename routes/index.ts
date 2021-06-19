import { Router } from "express";
import usersRouter from "./User";

const routes = Router();

routes.use("/api/users", usersRouter);

routes.use((error: any, req: any, res: any, next: any) => {
  return res.status(500).json({ error: error.toString() });
});

export default routes;
