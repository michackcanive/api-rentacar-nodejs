import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  async   handle(req: Request, resp: Response):Promise<Response> {

    const all =  await this.listCategoryUseCase.execute();
    return resp.json(all);
  }
}

export { ListCategoryController };
