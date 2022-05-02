import { Categoria } from "../../../entity/Categoria";
import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";




interface IRequest {
  name: string;
  discricao: string;
}
class ListCategoryUseCase  {
  constructor(private categoriasreposity: ICategoryRepository) {}
 async  execute(): Promise<Categoria[]>{
    return  await this.categoriasreposity.liste_categaria();
  }
  
}

export { ListCategoryUseCase };
