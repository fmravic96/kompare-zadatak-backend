import { Router } from "express";
import * as userHandler from "../handlers/user";

const usersRouter = Router();

usersRouter.get("/", userHandler.getUsers).post("/", userHandler.createUser).delete("/", userHandler.deleteUser);

export default usersRouter;
