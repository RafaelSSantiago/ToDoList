import { Router } from "express";
import { TodoRouter } from "./todo/todo";

export const router = Router();

router.use("/todo", TodoRouter);
