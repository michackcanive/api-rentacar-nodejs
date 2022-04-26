import { SpecificationsRepository } from "../../../repositories/Specification/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository= new SpecificationsRepository()
const createCategoryUseCase =new CreateSpecificationUseCase(specificationsRepository)
const createSpecificationController= new CreateSpecificationController(createCategoryUseCase)

export {createSpecificationController}