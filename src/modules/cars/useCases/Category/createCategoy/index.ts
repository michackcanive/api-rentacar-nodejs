/* import { CategoriasRepository } from "../../../repositories/Category/implementations/CategoriasRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {

const categoriasreposity = new CategoriasRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriasreposity);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);


  return createCategoryController;
}; */