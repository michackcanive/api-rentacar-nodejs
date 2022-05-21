
import { Specification } from '@modules/cars/infra/typeorm/entity/Specification';
import { ISpecificationsRepository } from '@modules/cars/repositories/Specification/ISpecificationsRepository';
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
