import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "../config/auth";

import AppError from "../errors/AppError";

interface TokenPayload {
  iat: number;
  ext: number;
  subject: string;
}

export default function auth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { subject } = decoded as TokenPayload;

    request.user = {
      id: subject,
    };

    return next();
  } catch (err) {
    throw new AppError("Invalid JWT token", 401);
  }
}
