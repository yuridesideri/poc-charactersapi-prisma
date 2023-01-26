import { Request, Response } from "express";
import { getCharactersFromDb } from "../repositories/character.repo.js";



export async function getCharactersCtrl(req: Request, res: Response){
    try {
        const { id } = res.locals as {id: string};
        const characters = await getCharactersFromDb(id);
        res.status(200)
        res.send(characters)
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}




export async function getGuildsCtrl(req: Request, res: Response): Promise<void>{
    try {
        
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}




export async function getWorldsCtrl(req: Request, res: Response): Promise<void>{
    try {
        
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}


