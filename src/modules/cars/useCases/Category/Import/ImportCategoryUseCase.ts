import { ICategoryRepository } from "../../../repositories/Category/ICategoryRepository";


interface IRequest {
  name: string;
  discricao: string;
}

class ImportCategoryUseCase  {
  constructor(private categoriasreposity: ICategoryRepository) {}
  
  execute({ name, discricao }: IRequest):void {

  }

}

export { ImportCategoryUseCase };
