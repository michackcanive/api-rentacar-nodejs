import { CategoriasRepository } from "../../../repositories/Category/implementations/CategoriasRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriasreposity= CategoriasRepository.getInstane()
const createCategoryUseCase=new CreateCategoryUseCase(categoriasreposity)
const createCategoryController=new CreateCategoryController(createCategoryUseCase)
export {createCategoryUseCase,categoriasreposity,createCategoryController}