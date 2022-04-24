import { Categoria } from "../model/categaria";

// data transfer object
interface ICreateCategariaDTO {
  name: string;
  discricao: string;
}

class CategoriasRepository {
  private categorias: Categoria[];

  constructor() {
    this.categorias = [];
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

  findName(name: string):Categoria {
    const categaria = this.categorias.find(
      (cotegaoria) => cotegaoria.name === name
    );
    return categaria;
  }
}

export { CategoriasRepository };
