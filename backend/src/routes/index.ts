import { Router } from "express";

import sessionsRouter from "./sessions.routes";
import usersRouter from "./users.routes";
import appointmentsRouter from "./appointments.routes";

const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/users", usersRouter);

routes.use("/appointments", appointmentsRouter);

export default routes;
