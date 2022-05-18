import { Categoria } from "../../entity/Categoria_test_";
// data transfer object
interface ICreateCategariaDTO {
    name: string;
    discricao: string;
  }
interface ICategoryRepository{
findByNAme(name:string): Promise<Categoria>;
create({name,discricao}:ICreateCategariaDTO): Promise<void>;
liste_categaria():Promise<Categoria[]>;
deleteAll(name:string):Promise<void>;
}
export {ICategoryRepository,ICreateCategariaDTO}