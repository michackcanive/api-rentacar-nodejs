import "reflect-metadata";
import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repository/UsersRepository";
import { IUserRepository } from "../../modules/accounts/repository/User/IUserRepository";
import { CategoriasRepository } from "../../modules/cars/infra/typeorm/repositories/Category/CategoriasRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/Specification/SpecificationsRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/Categotery/ICategoryRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/Specification/ISpecificationsRepository";


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
