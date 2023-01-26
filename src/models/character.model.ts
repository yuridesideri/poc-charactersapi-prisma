import joi from "joi";

const numberStringSchema = joi.string().regex(/^[0-9]+$/).required();
const normalStringSchema = joi.string().min(3).max(500).required();

export const characterSchema = joi.object({
    name: normalStringSchema,
    race: normalStringSchema,
    description: normalStringSchema,
    age: joi.number(),
    height: joi.number(),
    u_obj: normalStringSchema,
    sex: joi.string().insensitive().valid("male", "female", "other").required(),
    image: joi.string().uri().allow(null).default(null).optional(),
    guild_id: joi.number().allow(null).default(null).optional(),
    world_born_id: joi.number(),
})

export const characterUpdateSchema = joi.object().keys({
    name: joi.string().optional(),
    race: joi.string().optional(),
    description: joi.string().optional(),
    age: joi.number().optional(),
    height: joi.number().optional(),
    u_obj: joi.string().optional(),
    sex: joi.string().valid("male", "female", "other"),
    image: joi.string().uri().allow(null).optional(),
    guild_id: joi.number().allow(null).optional(),
    world_born_id: joi.number().optional(),
})

export const guildUpdateSchema = joi.object().keys({
    name: joi.string().optional(),
    description: joi.string().optional(),
    membersId: joi.array().items(joi.number()).optional(),
    guild_logo: joi.string().uri().allow(null).optional(),
})

export const characterIdSchema = numberStringSchema;