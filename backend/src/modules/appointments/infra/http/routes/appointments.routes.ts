import { Router } from "express";

import authMiddleware from "@modules/users/infra/http/middlewares/auth";

import AppointmentsController from "../controllers/AppointmentsController";

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(authMiddleware);

appointmentsRouter.post("/", appointmentsController.create);

export default appointmentsRouter;
