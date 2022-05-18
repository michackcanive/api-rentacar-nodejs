import "reflect-metadata"
import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/repository/User/implementations/UsersRepository";
import { IUserRepository } from "../../modules/accounts/repository/User/IUserRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/Category/ICategoryRepository";
import { CategoriasRepository } from "../../modules/cars/repositories/Category/implementations/CategoriasRepository";
import { CategoryRepositoryInMemory } from "../../modules/cars/repositories/Category/in-memory/CategoryRepositoryInMemory";
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
container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

