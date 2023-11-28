import { Router } from "express";
import { createUserController } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter
    .post("/", createUserController);

export default usersRouter;