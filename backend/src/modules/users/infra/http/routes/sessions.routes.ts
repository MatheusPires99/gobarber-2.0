import { Router } from "express";

import AuthenticateUserSerivce from "@modules/users/services/AuthenticateUserService";

import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

const sessionsRouter = Router();

sessionsRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const authenticateUser = new AuthenticateUserSerivce(usersRepository);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
