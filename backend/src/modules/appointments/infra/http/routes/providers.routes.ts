import { Router } from "express";

import authMiddleware from "@modules/users/infra/http/middlewares/auth";
import ProvidersController from "../controllers/ProvidersController";

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(authMiddleware);

providersRouter.get("/", providersController.index);

export default providersRouter;
