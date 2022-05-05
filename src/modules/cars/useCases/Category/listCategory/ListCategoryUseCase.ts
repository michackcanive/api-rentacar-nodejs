import { Categoria } from "../../../entity/Categoria";
import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  discricao: string;
}
@injectable()
class ListCategoryUseCase  {
  constructor(
    @inject("CategoriasRepository")
    private categoriasreposity: ICategoryRepository) {}
 async  execute(): Promise<Categoria[]>{
    return  await this.categoriasreposity.liste_categaria();
  }
  
}
export { ListCategoryUseCase };
