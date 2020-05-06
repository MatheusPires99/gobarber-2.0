import { Router } from "express";

import UsersController from "../controllers/SessionsController";

const sessionsRouter = Router();
const usersController = new UsersController();

sessionsRouter.post("/", usersController.create);

export default sessionsRouter;
