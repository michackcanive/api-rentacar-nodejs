import { Specification } from "../../../entity/Specification";
import {
  ISpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";
import { getRepository, Repository } from "typeorm";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, discricao }: ISpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      discricao,
    });
    await this.repository.save(specification);
  }

  async search_has_Name_Specification(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }

  async liste_specifications(): Promise<Specification[]> {
    return await this.repository.find();
  }
}

export { SpecificationsRepository };
