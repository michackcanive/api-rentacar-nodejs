import { Specification } from "../../../model/Specification";
import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";

interface IRequest {
  name: string;
  discricao: string;
}

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute():Specification[] {
    return this.specificationRepository.liste_specifications();
  }
}

export { ListSpecificationUseCase };
