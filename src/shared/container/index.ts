import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/cars/repositories/Category/ICategoryRepository";
import { CategoriasRepository } from "../../modules/cars/repositories/Category/implementations/CategoriasRepository";

// Interface ICategoryRepository
container.registerSingleton<ICategoryRepository>(
    "CategoriasRepository",
  CategoriasRepository
);


