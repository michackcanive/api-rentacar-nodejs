import { ICategoryRepository } from "../repositories/Category/ICategoryRepository";


interface IRequest {
  name: string;
  discricao: string;
}


class CreateCategoryServices {
  constructor(private categoriasreposity: ICategoryRepository) {}
  
  execute({ name, discricao }: IRequest):void {
    const categoria_is_existe = this.categoriasreposity.findByNAme(name);
    if (categoria_is_existe) {
      throw new Error("Category Already exists !");
    }
    this.categoriasreposity.create({ name, discricao });
  }
}

export { CreateCategoryServices };
