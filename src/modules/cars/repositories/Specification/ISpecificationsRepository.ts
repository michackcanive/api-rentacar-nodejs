import { Specification } from "../../entity/Specification";

interface ISpecificationDTO {
  name: string;
  discricao: string;
}

interface ISpecificationsRepository {
  create({ name, discricao }: ISpecificationDTO): Promise<void>;
  search_has_Name_Specification(name: string): Promise<Specification>;
  liste_specifications(): Promise<Specification[]>;
}

export { ISpecificationsRepository, ISpecificationDTO };
