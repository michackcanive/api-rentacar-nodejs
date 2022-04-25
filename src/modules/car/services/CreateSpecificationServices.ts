import { ISpecificationsRepository } from "../repositories/Specification/ISpecificationsRepository";


interface IRequest {
    name: string;
    discricao: string;
  }

class CreateSpecificationServices{
    constructor(private specificationRepository: ISpecificationsRepository) {}
    execute({ name, discricao }: IRequest):void {
        const specification_is_existe = this.specificationRepository.search_has_Name_Specification(name);
        if (specification_is_existe) {
          throw new Error("specification Already exists !");
        }
        this.specificationRepository.create({name,discricao})
    }
}
export {CreateSpecificationServices}