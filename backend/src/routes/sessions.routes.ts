import { Router } from "express";

import AuthenticateUserSerivce from "../service/AuthenticateUserService";

const sessionsRouter = Router();

sessionsRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const authenticateUser = new AuthenticateUserSerivce();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return res.json({ user, token });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
