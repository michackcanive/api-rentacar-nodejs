



import { Categoria_test_ } from "../../../infra/typeorm/entity/Categoria_test_";
import { ICategoryRepository, ICreateCategariaDTO } from "../ICarsRepository";


class CategoryRepositoryInMemory implements ICategoryRepository {

     Categorias:Categoria_test_[]=[];

     async findByNAme(name: string): Promise<Categoria_test_> {
        const categaria =  this.Categorias.find((Categoria)=>Categoria.name===name);
        return categaria;
      }
  async  create({ name, discricao }: ICreateCategariaDTO): Promise<void> {
       const categoria=new Categoria_test_();
       Object.assign(categoria,{
        name,
        discricao
       })

       this.Categorias.push(categoria)


    }
   async liste_categaria(): Promise<Categoria_test_[]> {
      const list=this.Categorias
      return list;
    }
    deleteAll(name: string): Promise<void> {

        throw new Error("Method not implemented.");
    }

}

export{CategoryRepositoryInMemory}
