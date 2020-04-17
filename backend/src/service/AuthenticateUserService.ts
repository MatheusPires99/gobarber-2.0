import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import User from "../models/User";

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw Error("Incorrect email/password combination.");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw Error("Incorrect email/password combination.");
    }

    const token = sign({}, "3b51b56bd0aa7890c1ea8cda3ae3b358", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
