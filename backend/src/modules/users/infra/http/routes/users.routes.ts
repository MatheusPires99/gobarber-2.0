import { Router } from "express";
import multer from "multer";
import { celebrate, Segments, Joi } from "celebrate";

import uploadConfig from "@config/upload";

import UsersController from "../controllers/UsersController";
import UserAvatarController from "../controllers/UserAvatarController";

import authMiddleware from "../middlewares/auth";

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);
usersRouter.patch(
  "/avatar",
  authMiddleware,
  upload.single("avatar"),
  userAvatarController.update,
);

export default usersRouter;
