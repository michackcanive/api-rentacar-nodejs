import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


class CreateCategoryController {

    constructor(private createCategoryUseCase:CreateCategoryUseCase){}

  handle(req: Request, resp: Response):Response {
    const { name, discricao } = req.body;
    this.createCategoryUseCase.execute({name,discricao})
    return resp.status(200).send()
  }
 
}

export { CreateCategoryController };
