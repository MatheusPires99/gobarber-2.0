import { Router } from "express";
import multer from "multer";

import CreateUserService from "@modules/users/services/CreateUserService";
import UpdateUserAvatarService from "@modules/users/services/UpdateUserAvatarService";

import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

import uploadConfig from "@config/upload";

import authMiddleware from "../middlewares/auth";

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post("/", async (request, response) => {
  const { name, email, password } = request.body;

  const usersRepository = new UsersRepository();
  const createUser = new CreateUserService(usersRepository);

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  "/avatar",
  authMiddleware,
  upload.single("avatar"),
  async (request, response) => {
    const usersRepository = new UsersRepository();
    const updateUserAvatar = new UpdateUserAvatarService(usersRepository);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatar_filename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
