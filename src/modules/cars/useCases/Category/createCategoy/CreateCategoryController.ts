import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase:CreateCategoryUseCase){}

  async  handle(req: Request, resp: Response): Promise<Response> {
    const { name, discricao } = req.body;
   await this.createCategoryUseCase.execute({name,discricao})

    return resp.status(200).json({
      err0:false,
      discricao:"Categoria cadastra",
    })
  }
}

export { CreateCategoryController };
