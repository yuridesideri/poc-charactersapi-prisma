import { Request, Response } from "express";
import prisma from "../database/db.js";


export async function deleteCharacterCtrl(req: Request, res: Response){
    try {
        const { id: characterId } = res.locals as {id: number};
        await prisma.characters.delete({
            where: {
                id: characterId
            }
        })
        res.sendStatus(200);
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}



export async function deleteGuildCtrl(req: Request, res: Response): Promise<void>{
    try {
        const { id: guildId } = res.locals as {id: number};
        await prisma.guilds.delete({
            where: {
                id: guildId
            }
        })
        res.sendStatus(200);
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}