import { Request, Response } from "express";
import { container } from "tsyringe";

import ResetPasswordService from "@modules/users/services/ResetPasswordService";

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassqword = container.resolve(ResetPasswordService);

    await resetPassqword.execute({
      password,
      token,
    });

    return response.status(204).json();
  }
}
