import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/cars/repositories/Category/ICategoryRepository";
import { CategoriasRepository } from "../../modules/cars/repositories/Category/implementations/CategoriasRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/Specification/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/Specification/ISpecificationsRepository";

// Interface ICategoryRepository
container.registerSingleton<ICategoryRepository>(
    "CategoriasRepository",
  CategoriasRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

