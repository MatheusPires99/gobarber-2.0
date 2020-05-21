import { Router } from "express";

import authMiddleware from "@modules/users/infra/http/middlewares/auth";

import AppointmentsController from "../controllers/AppointmentsController";
import ProviderAppointmentsController from "../controllers/ProviderAppointmentsController";

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(authMiddleware);

appointmentsRouter.post("/", appointmentsController.create);
appointmentsRouter.get("/me", providerAppointmentsController.index);

export default appointmentsRouter;
