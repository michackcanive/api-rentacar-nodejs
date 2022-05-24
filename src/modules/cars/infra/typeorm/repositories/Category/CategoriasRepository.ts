
import { getRepository, Repository } from "typeorm";
import { ICategoryRepository } from "../../../../repositories/Cars/ICarsRepository";
import { ICreateCategariaDTO } from "../../../../repositories/Categotery/ICategoryRepository";
import { Categoria_test_ } from "../../entity/Categoria_test_";

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
