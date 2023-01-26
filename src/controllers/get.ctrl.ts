import { Request, Response } from "express";
import prisma from "../database/db.js";
import { getCharactersFromDb } from "../repositories/character.repo.js";



export async function getCharactersCtrl(req: Request, res: Response){
    try {
        const { id: characterId } = res.locals as {id: number};
        let characters = null;
        if (characterId){
            characters = await prisma.characters.findUnique({
                where: {
                    id: characterId
                }
            })
        }
        else{
            characters = await prisma.characters.findMany()
        }
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
        const { id: guildId } = res.locals as {id: number};
        let guild = null;
        if (guildId){
            guild = await prisma.guilds.findUnique({
                where: {
                    id: guildId
                },
                select:{
                    members: true
                }

            })
        }
        else{
            guild = await prisma.guilds.findMany({
                select:{
                    id: true,
                    name: true,
                    description: true,
                    guild_logo: true,
                    members: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            }
            )
        }
        res.status(200)
        res.send(guild)
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}




export async function getWorldsCtrl(req: Request, res: Response): Promise<void>{
    try {
        const { id: worldId } = res.locals as {id: number};
        let world = null;
        if (worldId){
            world = await prisma.worlds.findUnique({
                where: {
                    id: worldId
                },
                select:{
                    id: true,
                    name: true,
                    description: true,
                    image: true,
                    characters:{
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            })
        }
        else{
            world = await prisma.worlds.findMany({
                select:{
                    id: true,
                    name: true,
                    description: true,
                    image: true,
                    characters:{
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            })
        }
        res.status(200)
        res.send(world)
    }catch (err){
        console.error(err)
        res.status(400)
        res.send(err)
    }
}


