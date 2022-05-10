import { Categoria } from "../../../entity/Categoria";
import { getRepository, Repository } from "typeorm";

import {
  ICategoryRepository,
  ICreateCategariaDTO,
} from "../ICategoryRepository";



class CategoriasRepository implements ICategoryRepository {
  
  private repository: Repository<Categoria>;

    constructor() {
    this.repository = getRepository(Categoria);
  }

  async create({ name, discricao }: ICreateCategariaDTO): Promise<void> {

    const categaria = this.repository.create({
      name,
      discricao,
    });
    
    await this.repository.save(categaria);
    
  }
  
  async liste_categaria(): Promise<Categoria[]> {
    const categorias = await this.repository.find();
    return categorias;
  }
  async deleteAll(name: string):Promise<void> {
    const categorias = await this.repository.delete({name});
   
  }

  async findByNAme(name: string): Promise<Categoria> {
    const categaria = await this.repository.findOne({ name });
    return categaria;
  }
}

export { CategoriasRepository };
