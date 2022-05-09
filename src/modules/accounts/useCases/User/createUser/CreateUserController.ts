import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";
class CreateUserController {
  async handle(req: Request, resp: Response): Promise<Response> {
    const { name, email, password, numero_licenca } = req.body;
    if(!name&&!email&&!password&&!numero_licenca){
      return resp.status(401).json({
        erro: true,
        discricao: "Campos em falta",
      });
    }

    const createUsersUseCase = container.resolve(CreateUserUseCase);
    await createUsersUseCase.execute({ name, email, password, numero_licenca });

    return resp.status(200).json({
      erro: false,
      discricao: "Userio cadastrado",
    });
  }
}
export { CreateUserController };
