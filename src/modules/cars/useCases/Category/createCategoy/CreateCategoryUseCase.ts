import { AppError } from "@errors/AppError";
import { ICategoryRepository } from "@modules/cars/repositories/Categotery/ICategoryRepository";

import "reflect-metadata"
import { inject, injectable } from "tsyringe";



interface IRequest {
  name: string;
  discricao: string;
}

@injectable()
class CreateCategoryUseCase  {
  constructor(
    @inject("CategoriasRepository")
    private categoriasreposity: ICategoryRepository) {
  }
 async execute({ name, discricao }: IRequest):Promise<void> {

    const categoria_is_existe = await this.categoriasreposity.findByNAme(name);
    if (categoria_is_existe) {
      throw new AppError("Category Already exists !");
    }
    this.categoriasreposity.create({ name, discricao });
  }

}

export { CreateCategoryUseCase };
