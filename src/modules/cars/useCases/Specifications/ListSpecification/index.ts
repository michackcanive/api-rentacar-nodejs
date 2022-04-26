import { SpecificationsRepository } from "../../../repositories/Specification/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";


const specificationsRepository=  SpecificationsRepository.getInstane();
const listCategoryUseCase =new ListSpecificationUseCase(specificationsRepository)
const listSpecificationController= new CreateSpecificationController(listCategoryUseCase)

export {listSpecificationController}