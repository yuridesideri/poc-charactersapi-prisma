import { Request, Response } from "express";
import { removeCharacterFromDb } from "../repositories/character.repo.js";


export async function deleteCharacterCtrl(req: Request, res: Response){
    try {
        const { id } = res.locals as {id: string};
        await removeCharacterFromDb(id);
        res.sendStatus(200);

    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}



export async function deleteGuildCtrl(req: Request, res: Response): Promise<void>{
    try {
        
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}