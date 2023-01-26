import { NextFunction, Request, Response } from "express";
import {
	characterIdSchema,
	characterSchema,
	characterUpdateSchema,
	guildUpdateSchema,
} from "../models/character.model.js";
import { Character, Guild } from "../types/character.type";

export async function characterValidationMid(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const character = req.body as Character;
		const validatedCharacter = await characterSchema.validateAsync(character);
		res.locals.character = validatedCharacter;
		next();
	} catch (err) {
		console.error(err);
		res.status(400);
		res.send(err);
	}
}

export async function updateCharacterMid(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { id } = req.params;
		const character = req.body;
		const validatedCharacter = await characterUpdateSchema.validateAsync(
			character
		);
		const validatedId = await characterIdSchema.validateAsync(id);
		res.locals.updatedCharacter = validatedCharacter;
		res.locals.id = validatedId;
		next();
	} catch (err) {
		console.error(err);
		res.status(400);
		res.send(err);
	}
}

export async function validateIdMid(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { id } = req.params;
		let validatedId = undefined;
		if (id) {
			validatedId = await characterIdSchema.validateAsync(id);
		}
		res.locals.id = validatedId;
		next();
	} catch (err) {
		console.error(err);
		res.status(400);
		res.send(err);
	}
}

export async function validateUpsert(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const { guild, character } = req.body as {
			guild: Guild;
			character: Character;
		};
		const validatedGuild = await guildUpdateSchema.validateAsync(guild);
		const validatedCharacter = await characterUpdateSchema.validateAsync(
			character
		);
		res.locals = { guild: validatedGuild, newCharacter: validatedCharacter };
		next();
	} catch (err) {
		console.error(err);
		res.status(400);
		res.send(err);
	}
}
