import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {

    constructor(private importCategoryUseCase:ImportCategoryUseCase){}

  handle(req: Request, resp: Response):Response {
    const {file} =req;
  const quatidadeDeCategoryImport=this.importCategoryUseCase.execute(file);
    return resp.status(201).json({
      erro:false,
      mensagem:'importados com sucesso 😀🚀'
    })
  }
 
}

export { ImportCategoryController };
