import { Router } from "express";
import { createClientController, getClientsController } from "../controllers/clientsController.js";
import { authorizationVerify } from "../middlewares/authorizationVerify.js";

const clientsRouter = Router();

clientsRouter
    .post("/", authorizationVerify, createClientController)
    .get("/", authorizationVerify, getClientsController);

export default clientsRouter;