import { Request, Response } from "express";
import "reflect-metadata"
import { container } from "tsyringe";
import { AuthenticationUserCase } from "./AuthenticationUserCase";

class AuthUserController {
  async handle(req: Request, resp: Response): Promise<Response> {
    const {  email, password } = req.body;
    if(!email&&!password){
      return resp.status(401).json({
        erro: true,
        discricao: "Campos em falta",
      });
    }

    const createUsersUseCase = container.resolve(AuthenticationUserCase);
   const resultToken=await createUsersUseCase.execute({  email, password });

    return resp.status(200).json({
      erro: false,
      resultToken
    });
  }
}
export { AuthUserController };
