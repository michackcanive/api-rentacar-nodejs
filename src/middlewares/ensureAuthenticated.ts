import { NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repository/User/implementations/UsersRepository";

interface IPayload {
  sub: string;
}
interface Iparament {
  req: Request;
  resp: Response;
  next: NextFunction;
}

export async function ensureAuthenticated({ req, resp, next }: Iparament) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    throw new AppError("token missing", 401);
  }

  const [, token] = authHeader.split(" ");
  try {
    const decodeficado = verify(token, process.env.TOKEN_SECRET);
    const { sub: user_id } = decodeficado as IPayload;
    const userRepository = new UsersRepository();
    const user = await userRepository.findById(user_id);

    if (user) {
      next();
    } else {
      throw new AppError("User dees not exists ! ", 400);
    }
  } catch {
    throw new AppError("Invalid token !", 401);
  }
}
