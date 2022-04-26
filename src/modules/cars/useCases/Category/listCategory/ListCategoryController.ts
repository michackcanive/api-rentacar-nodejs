import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(req: Request, resp: Response) {
    const all = this.listCategoryUseCase.execute();
    return resp.json(all);
  }
}

export { ListCategoryController };
