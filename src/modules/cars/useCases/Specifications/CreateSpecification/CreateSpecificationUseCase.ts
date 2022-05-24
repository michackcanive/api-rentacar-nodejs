

import { inject,injectable} from 'tsyringe'
import { AppError } from '../../../../../errors/AppError';
import { ISpecificationsRepository } from '../../../repositories/Specification/ISpecificationsRepository';



interface IRequest {
  name: string;
  discricao: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository) {}

 async execute({ name, discricao }: IRequest):Promise<void> {

    const Specification_is_existe = await this.specificationRepository.search_has_Name_Specification(name);
    if (Specification_is_existe) {
      throw new AppError("Specification Already exists !");
    }

    this.specificationRepository.create({ name, discricao })
  }
}

export { CreateSpecificationUseCase };
