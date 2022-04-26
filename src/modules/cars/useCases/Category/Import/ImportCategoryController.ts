import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


class ImportCategoryController {

    constructor(private importCategoryUseCase:ImportCategoryUseCase){}

  handle(req: Request, resp: Response):Response {
    const file =req;
    console.log(file)
    return resp.send()
  }
 
}

export { ImportCategoryController };
