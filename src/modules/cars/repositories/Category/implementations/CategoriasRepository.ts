import { Categoria } from "../../../model/categaria";
import {
  ICategoryRepository,
  ICreateCategariaDTO,
} from "../ICategoryRepository";

class CategoriasRepository implements ICategoryRepository {
  private categorias: Categoria[];

  private static INTANCE:CategoriasRepository

 private constructor() {
    this.categorias = [];
  }

  public static getInstane(){
    if(!CategoriasRepository.INTANCE){
      CategoriasRepository.INTANCE=new CategoriasRepository();
    }
    return CategoriasRepository.INTANCE;
  }
  create({ name, discricao }: ICreateCategariaDTO): void {
    const categaria = new Categoria();
    Object.assign(categaria, {
      name,
      discricao,
      create_At: new Date(),
    });

    this.categorias.push(categaria);
  }

  liste_categaria(): Categoria[] {
    return this.categorias;
  }

  findByNAme(name: string): Categoria {
    const categaria = this.categorias.find(
      (cotegaoria) => cotegaoria.name === name
    );
    return categaria;
  }
}

export { CategoriasRepository };
