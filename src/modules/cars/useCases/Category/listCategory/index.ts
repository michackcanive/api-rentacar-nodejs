
import { CategoriasRepository } from "../../../repositories/Category/implementations/CategoriasRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriasreposity=CategoriasRepository.getInstane()
const listCategoryUseCase=new ListCategoryUseCase(categoriasreposity)
const listCategoryController=new ListCategoryController(listCategoryUseCase)
export {listCategoryUseCase,categoriasreposity,listCategoryController}