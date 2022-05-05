import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  handle(req: Request, resp: Response): Response {
    const { file } = req;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    importCategoryUseCase.execute(file);

    return resp.status(201).json({
      erro: false,
      mensagem: "importados com sucesso 😀🚀",
    });
  }
}

export { ImportCategoryController };
