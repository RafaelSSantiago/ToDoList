import { Router } from "express";
import { TodoRouter } from "./todo/todo";
import { UserRouter } from "./user/user";

export const router = Router();

router.use("/todo", TodoRouter);
router.use("/user", UserRouter);
