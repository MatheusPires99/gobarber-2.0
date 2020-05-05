import { Router } from "express";

import appointmentsRouter from "@modules/appointments/infra/http/routes/appointments.routes";
import usersRouter from "@modules/users/infra/http/routes/users.routes";
import sessionsRouter from "@modules/users/infra/http/routes/sessions.routes";

const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/users", usersRouter);

routes.use("/appointments", appointmentsRouter);

export default routes;
