import { Router } from "express";
import { getCharactersCtrl, getGuildsCtrl, getWorldsCtrl } from "../controllers/get.ctrl.js";

export const getRouter = Router();

getRouter
	.get("/worlds/:id?", getWorldsCtrl)
	.get("/guilds/:id?", getGuildsCtrl)
	.get("/characters/:id?", getCharactersCtrl);
