import { Request, Response } from "express";
import "reflect-metadata";
import { CreateCarsUseCase } from "./CreateCarsUseCase";
import { container } from "tsyringe";
class CreateCarsController {
  async handle(req: Request, resp: Response): Promise<Response> {
    const { name, discricao } = req.body;

    const createCategoryUseCase = container.resolve(CreateCarsUseCase);
    await createCategoryUseCase.execute({ name, discricao });

    return resp.status(200).json({
      erro: false,
      discricao: "Cars cadastra",
    });

  }
}
export { CreateCarsController };