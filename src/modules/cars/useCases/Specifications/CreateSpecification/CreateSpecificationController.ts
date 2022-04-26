import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



interface IRequest {
    name: string;
    discricao: string;
  }

class CreateSpecificationController{
    constructor(private specificationRepository: CreateSpecificationUseCase) {}
    
}
export {CreateSpecificationController}