import { Character, CharacterFields } from "../types/character.type.js";
import  prisma from "../database/db.js";	

export async function getCharactersFromDb(id : number) {
    // return connection.query("SELECT * FROM characters WHERE ($1::text IS NULL) OR id = $1::numeric;", [id]);
    return await prisma.characters.findMany({
        where: {id: id ? Number(id) : undefined}
    })
}

export async function removeCharacterFromDb(id: string) {
    // return connection.query(
    //     `
    // DELETE FROM characters
    // WHERE id = $1;
    // `,
    //     [id]
    // );
    return await prisma.characters.delete({
        where: {id: Number(id)}
    })
}