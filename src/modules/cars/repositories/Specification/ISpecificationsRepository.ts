import { Specification } from "@modules/cars/infra/typeorm/entity/Specification";
import { ICreateSpecificationDTO } from "./dtos/ICreateSpecificationDTO";

interface ISpecificationsRepository {
  create({ name, discricao }: ICreateSpecificationDTO): Promise<void>;
  search_has_Name_Specification(name: string): Promise<Specification>;
  liste_specifications(): Promise<Specification[]>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
