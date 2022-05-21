
import { Categoria } from "@modules/cars/infra/typeorm/entity/Categoria";
import { ICategoryRepository } from "@modules/cars/repositories/Categotery/ICategoryRepository";

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
  

     const ds=await this.categoriasreposity.liste_categaria();
     /* ds.map(async (categor)=>{
      const { name, discricao } = categor;
     //await this.categoriasreposity.deleteAll(name);
     }) */
     return ds
  }
  
}
export { ListCategoryUseCase };
