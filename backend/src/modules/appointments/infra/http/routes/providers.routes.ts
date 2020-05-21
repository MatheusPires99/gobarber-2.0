import { Router } from "express";

import authMiddleware from "@modules/users/infra/http/middlewares/auth";
import ProvidersController from "../controllers/ProvidersController";
import ProviderMonthAvailabilityController from "../controllers/ProviderMonthAvailabilityController";
import ProviderDayAvailabilityController from "../controllers/ProviderDayAvailabilityController";

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providersRouter.use(authMiddleware);

providersRouter.get("/", providersController.index);
providersRouter.get(
  "/:provider_id/month-availability",
  providerMonthAvailabilityController.index,
);
providersRouter.get(
  "/:provider_id/day-availability",
  providerDayAvailabilityController.index,
);

export default providersRouter;
