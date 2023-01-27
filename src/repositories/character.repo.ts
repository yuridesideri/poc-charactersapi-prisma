import  prisma from "../database/db.js";	

export async function getCharactersFromDb(id : number) {
    return await prisma.characters.findMany({
        where: {id: id ? Number(id) : undefined}
    })
}

export async function removeCharacterFromDb(id: string) {

    return await prisma.characters.delete({
        where: {id: Number(id)}
    })
}