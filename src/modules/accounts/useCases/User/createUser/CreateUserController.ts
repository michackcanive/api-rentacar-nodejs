import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";
class CreateUserController {
  async handle(req: Request, resp: Response): Promise<Response> {
    const { name, email, password, numero_licenca } = req.body;

    const createUsersUseCase = container.resolve(CreateUserUseCase);
    await createUsersUseCase.execute({ name, email, password, numero_licenca });

    return resp.status(200).json({
      err0: false,
      discricao: "Userio cadastrado",
    });
  }
}
export { CreateUserController };
