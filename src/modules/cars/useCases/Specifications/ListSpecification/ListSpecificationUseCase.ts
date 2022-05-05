import { Specification } from "../../../entity/Specification";
import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";
import { inject,injectable} from 'tsyringe'
@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository) {}
 
 async execute():Promise<Specification[]> {
    return await this.specificationRepository.liste_specifications();
  }
}

export { ListSpecificationUseCase };
