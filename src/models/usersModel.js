import prisma from "../database.js";

async function getUsersByLogin(login) {
    return prisma.user.findFirst({
        where: {
            login,
        }
    });    
};

async function createNewUser(login, password, name) {
    return prisma.user.create({
        data: {
            login,
            password,
            name,
        }
    });
};

async function getUserByLogin(login) {
    return prisma.user.findFirst({
        where: {
            login,
        }
    });
};


const usersModel = {
    getUsersByLogin,
    createNewUser,
    getUserByLogin,
};

export default usersModel;