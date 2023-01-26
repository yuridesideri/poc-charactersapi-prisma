import { Router } from "express";
import {
	getCharactersCtrl,
	getGuildsCtrl,
	getWorldsCtrl,
} from "../controllers/get.ctrl.js";
import { validateIdMid } from "../middlewares/character.mid.js";

export const getRouter = Router();

getRouter
	.get("/worlds/:id?", validateIdMid, getWorldsCtrl)
	.get("/guilds/:id?",validateIdMid, getGuildsCtrl)
	.get("/characters/:id?", validateIdMid, getCharactersCtrl);
