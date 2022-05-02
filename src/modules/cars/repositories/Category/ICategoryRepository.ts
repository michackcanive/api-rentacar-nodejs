import { Categoria } from "../../entity/Categoria";
// data transfer object
interface ICreateCategariaDTO {
    name: string;
    discricao: string;
  }
interface ICategoryRepository{
findByNAme(name:string): Promise<Categoria>;
create({name,discricao}:ICreateCategariaDTO): Promise<void>;
liste_categaria():Promise<Categoria[]>;
}
export {ICategoryRepository,ICreateCategariaDTO}