import prisma from "./database.js";

async function populate() {
    try {
        const user = await prisma.user.create({
            data: {
                login: "admin",
                password: "admin",
                name: "gabriel",
            },
        });
    
        await prisma.clients.createMany({
            data: [
                { name: "John Doe", userId: user.id },
                { name: "Maria Clara", userId: user.id },
                { name: "João de Deus", userId: user.id },
                { name: "Rhuan Cardozo", userId: user.id },
        ], 
        });

        console.log("banco populado com sucesso.");
        
    } catch (error) {
        console.log(error);
        console.log("Erro ao popular o banco.");
    }
};

populate();