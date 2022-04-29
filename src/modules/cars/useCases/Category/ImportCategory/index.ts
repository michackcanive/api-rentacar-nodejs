import { CategoriasRepository } from "../../../repositories/Category/implementations/CategoriasRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriasreposity= CategoriasRepository.getInstane()
const importCategoryUseCase=new ImportCategoryUseCase(categoriasreposity)
const importCategoryController=new ImportCategoryController(importCategoryUseCase)
export {importCategoryUseCase,categoriasreposity,importCategoryController}