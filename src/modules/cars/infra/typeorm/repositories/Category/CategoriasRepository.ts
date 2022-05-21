import { Categoria_test_ } from "@modules/cars/infra/typeorm/entity/Categoria_test_";
import {
  ICategoryRepository,
  ICreateCategariaDTO,
} from "@modules/cars/repositories/Categotery/ICategoryRepository";
import { getRepository, Repository } from "typeorm";

class CategoriasRepository implements ICategoryRepository {
  private repository: Repository<Categoria_test_>;

  constructor() {
    this.repository = getRepository(Categoria_test_);
  }

  async create({ name, discricao }: ICreateCategariaDTO): Promise<void> {
    const categaria = this.repository.create({
      name,
      discricao,
    });

    await this.repository.save(categaria);
  }

  async liste_categaria(): Promise<Categoria_test_[]> {
    const categorias = await this.repository.find();
    return categorias;
  }
  async deleteAll(name: string): Promise<void> {
    const categorias = await this.repository.delete({ name });
  }

  async findByNAme(name: string): Promise<Categoria_test_> {
    const categaria = await this.repository.findOne({ name });
    return categaria;
  }
}

export { CategoriasRepository };
