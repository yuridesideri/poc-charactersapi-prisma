import { Character, CharacterFields } from "../types/character.type.js";
import  prisma from "../database/db.js";	

export async function getCharactersFromDb(id : number) {
    // return connection.query("SELECT * FROM characters WHERE ($1::text IS NULL) OR id = $1::numeric;", [id]);
    return await prisma.characters.findMany({
        where: {id: id ? Number(id) : undefined}
    })
}

// export async function insertCharacterIntoDb(character: Character<Omit, "world_born" | "guild">) {
// //     // const { name, race, description, age, height, u_obj, sex, image = null, world_born_id } = character;
// //     // return connection.query(
// //     //     ` 
// //     // INSERT INTO 
// //     // characters (name, race, description, age, height, u_obj, sex, image) 
// //     // VALUES
// //     // ($1, $2, $3, $4, $5, $6, $7, $8);
// //     // `,
// //     //     [name, race, description, age, height, u_obj, sex, image]
// //     // );
// //     return await prisma.characters.create({
// //         data: {...character}
//     });
// }

// export async function updateCharacterIntoDb(id: string, character: CharacterFields) {
//     const keys = Object.keys(character);
//     const values = Object.values(character);
//     // return connection.query(
//     //     `
//     // UPDATE characters
//     // SET ${keys.map((key, index) => `${key} = $${index + 2}`).join(", ")}
//     // WHERE id = $1;
//     // `,
//     //     [id, ...values]
//     // );
//     return await prisma.characters.update({
//         where: {id: Number(id)},
//         data: character
//     })
// }

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