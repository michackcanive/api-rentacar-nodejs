import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { container } from "tsyringe";
class ListCategoryController {

  async   handle(req: Request, resp: Response):Promise<Response> {
    const listCategoryUseCase=container.resolve(ListCategoryUseCase);

    const all =  await listCategoryUseCase.execute();
    return resp.json(all);
  }
}

export { ListCategoryController };
