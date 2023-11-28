import usersModel from "../models/usersModel.js";

export async function authorizationVerify(req, res, next) {
    try {
        const { login, password } = req.body;

        if(!login || login === "") throw { status: 400, message: "Campo 'login' vazio ou não enviado." };
        
        if(!password || password === "") throw { status: 400, message: "Campo 'password' vazio ou não enviado." };
        
        const user = await usersModel.getUsersByLogin(login);

        if(!user) throw { status: 404, message: "Usuário não encontrado." };

        if(user.password != password) throw { status: 401, message: "Não autorizado." };

        next();

    } catch (error) {
        console.log(error);

        return res.status(error.status || 400).send(error.message || "");
    }
};