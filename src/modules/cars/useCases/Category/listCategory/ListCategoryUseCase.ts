import { Categoria } from "../../../model/categaria";
import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";




interface IRequest {
  name: string;
  discricao: string;
}
class ListCategoryUseCase  {
  constructor(private categoriasreposity: ICategoryRepository) {}
  execute():Categoria[] {
    return this.categoriasreposity.liste_categaria();
  }
  
}

export { ListCategoryUseCase };
