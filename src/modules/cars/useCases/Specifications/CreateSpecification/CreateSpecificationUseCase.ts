import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";

interface IRequest {
  name: string;
  discricao: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute({ name, discricao }: IRequest) {

    const Specification_is_existe = this.specificationRepository.search_has_Name_Specification(name);
    if (Specification_is_existe) {
      throw new Error("Specification Already exists !");
    }

    this.specificationRepository.create({ name, discricao })
  }
}

export { CreateSpecificationUseCase };
