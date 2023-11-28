import usersModel from "../models/usersModel.js";

export async function createUserController(req, res) {
    try {
        const { name, login, password } = req.body;

        if(!login || login === "") throw { status: 400, message: "Campo 'login' vazio ou não enviado." };
        
        if(!password || password === "") throw { status: 400, message: "Campo 'password' vazio ou não enviado." };
        
        if(!name || name === "") throw { status: 400, message: "Campo 'name' vazio ou não enviado." };
        
        const loginVerify = await usersModel.getUsersByLogin(login);

        if(loginVerify) throw { status: 409, message: "Este login já está cadastrado." };

        const createdUser = await usersModel.createNewUser(login, password, name );

        return res.send(createdUser).status(201);

    } catch (error) {
        console.log(error);

        return res.status(error.status || 400).send(error.message || "");
    }
}