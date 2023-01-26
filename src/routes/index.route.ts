import { Router } from "express";
import { deleteRouter } from "./deletion.route.js";
import { getRouter } from "./get.route.js";
import { upsertRouter } from "./upsert.route.js";

export const indexRouter = Router();

indexRouter.use(upsertRouter).use(getRouter).use(deleteRouter);
