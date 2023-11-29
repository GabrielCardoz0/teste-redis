import clientsModel from "../models/clientsModel.js";
import usersModel from "../models/usersModel.js";
import { createClient } from "redis";

const redis = createClient();


export async function createClientController(req, res) {
    try {
        const { clientName, login } = req.body;
        
        if(!clientName || clientName === "") throw { status: 400, message: "Campo 'clientName' vazio ou não enviado." };
        
        const user = await usersModel.getUsersByLogin(login);

        const clientNameVerify = await clientsModel.getClientByNameAndUserId(clientName, user.id);

        if(clientNameVerify) throw { status: 409, message: "Você ja tem um cliente cadastrado com este nome." };

        const createdClient = await clientsModel.createClient(clientName, user.id);

        return res.send(createdClient).status(201);

    } catch (error) {
        console.log(error);

        return res.status(error.status || 400).send(error.message || "");
    };
};

export async function getClientsController(req, res) {
    try {
        
        const { login } = req.body;
        
        const user = await usersModel.getUserByLogin(login);

        let clientsList;
        
        await redis.connect();
        
        const cachedClients = await redis.get(`${user.id}`);
        
        if(!cachedClients){
          
            clientsList = await clientsModel.getClientsByUserId(user.id);
          
            await redis.set(`${user.id}`, JSON.stringify(clientsList));
          
        } else {
            clientsList = cachedClients;
        };

        return res.status(200).send(clientsList);
        
    } catch (error) {
        console.log(error);

        return res.status(error.status || 400).send(error.message || "");
    } finally {
        await redis.disconnect();
    };
};