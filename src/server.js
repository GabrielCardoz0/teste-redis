import express from "express";
import cors from "cors";
import clientsRouter from "./routes/clientsRouter.js";
import usersRouter from "./routes/usersRouter.js";

const server = express();

server
    .use(express.json())
    .use(cors())
    .get("/health", (req, res) => res.send("OK!"))
    .use("/users", usersRouter)
    .use("/clients", clientsRouter);

server.listen(3000, () => console.log( "Server running in port: 3000." ));