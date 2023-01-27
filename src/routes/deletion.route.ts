import { Router } from "express";
import { deleteCharacterCtrl, deleteGuildCtrl } from "../controllers/deletion.ctrl.js";
import { validateIdMid } from "../middlewares/character.mid.js";

export const deleteRouter = Router();

deleteRouter
	.delete("/character/:id", validateIdMid, deleteCharacterCtrl)
	.delete("/guild/:id", validateIdMid, deleteGuildCtrl)