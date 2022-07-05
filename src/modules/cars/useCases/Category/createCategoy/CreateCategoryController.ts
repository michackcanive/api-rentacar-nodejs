import { Request, Response } from "express";
import "reflect-metadata";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";
class CreateCategoryController {
  async handle(req: Request, resp: Response): Promise<Response> {
    const { name, discricao } = req.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    await createCategoryUseCase.execute({ name, discricao });

    return resp.status(200).json({
      erro: false,
      discricao: "Categoria cadastra",
    });

  }
}
export { CreateCategoryController };
