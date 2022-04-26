import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";



interface IRequest {
    name: string;
    discricao: string;
  }

class CreateSpecificationUseCase{
    constructor(private specificationRepository: ISpecificationsRepository) {}
}

export {CreateSpecificationUseCase}