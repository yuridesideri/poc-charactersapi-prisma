import { Request, Response } from "express";
import prisma from "../database/db.js";

import {
	Character,
	Guild,
} from "../types/character.type.js";

export async function upsertCtrl(req: Request, res: Response) {
	try {
		const { newCharacter = undefined, guild = undefined } = res.locals as {
			newCharacter: Omit<Character, "world_born" | "guild"> | undefined;
			guild: Guild | undefined;
		};
        if (newCharacter) {
            await prisma.characters.upsert({
                where: {
                    name: newCharacter.name || "",
                },
                update: {
                    ...newCharacter,
                },
                create: {
                    ...newCharacter,
                },
            });
        }
		if (guild) {
            const {membersId, ...guildWithoutMembers} = guild;
		    await prisma.guilds.upsert({
		        where: {
                        name: guild.name || "",
		        },
		        update: {
		            description: guild.description,
                    members: {
                        connect:
                            guild.membersId.map((memberId) => {
                                return { id: memberId };
                            })
                    }
		        },
		        create: {
		            ...guildWithoutMembers,
                    members: {
                        connect:
                            guild.membersId.map((memberId) => {
                                return { id: memberId };
                            })
                    }
		        },
		    });
		}
		res.sendStatus(201);
	} catch (err) {
		console.error(err);
		res.status(400);
		res.send(err);
	}
}
