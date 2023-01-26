import { Router } from "express";
import { deleteCharacterCtrl, deleteGuildCtrl } from "../controllers/deletion.ctrl.js";

export const deleteRouter = Router();

deleteRouter
	.delete("character/:id", deleteCharacterCtrl)
	.delete("guild/:id", deleteGuildCtrl);