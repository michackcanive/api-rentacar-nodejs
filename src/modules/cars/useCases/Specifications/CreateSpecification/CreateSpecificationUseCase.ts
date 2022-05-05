import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";
import { inject,injectable} from 'tsyringe'
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
      throw new Error("Specification Already exists !");
    }

    this.specificationRepository.create({ name, discricao })
  }
}

export { CreateSpecificationUseCase };
