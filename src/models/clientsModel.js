import prisma from "../database.js";

async function getClientByNameAndUserId(clientName, userId) {
    return prisma.clients.findFirst({
        where: {
            name: clientName,
            userId,
        }
    });
};

async function createClient(name, userId) {
    return prisma.clients.create({
        data: {
            name,
            userId,
        }
    });
};

async function getClientsByUserId(userId) {
    return prisma.clients.findMany({
        where: {
            userId,
        }
    });
}


const clientsModel = {
    getClientByNameAndUserId,
    createClient,
    getClientsByUserId,
};

export default clientsModel;