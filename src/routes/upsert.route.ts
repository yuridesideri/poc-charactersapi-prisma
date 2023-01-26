import { Router } from "express";
import { upsertCtrl} from "../controllers/upsert.ctrl.js";
import { validateUpsert } from "../middlewares/character.mid.js";

export const upsertRouter = Router();

upsertRouter
    .put("/generate", 
    validateUpsert, 
    upsertCtrl)
