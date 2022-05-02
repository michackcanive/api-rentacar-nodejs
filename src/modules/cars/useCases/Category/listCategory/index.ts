
import { CategoriasRepository } from "../../../repositories/Category/implementations/CategoriasRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
export default (): ListCategoryController => {
const categoriasreposity= new CategoriasRepository();
const listCategoryUseCase=new ListCategoryUseCase(categoriasreposity)
const listCategoryController=new ListCategoryController(listCategoryUseCase)
/* export {listCategoryUseCase,categoriasreposity,listCategoryController} */

return listCategoryController

}