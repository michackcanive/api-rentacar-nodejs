
import { inject,injectable} from 'tsyringe'
import { Specification } from '../../../infra/typeorm/entity/Specification';
import { ISpecificationsRepository } from '../../../repositories/Specification/ISpecificationsRepository';
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
