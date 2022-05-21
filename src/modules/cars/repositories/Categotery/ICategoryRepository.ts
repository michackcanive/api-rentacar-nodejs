import { Categoria } from "@modules/cars/infra/typeorm/entity/Categoria";
import { ICreateCategariaDTO } from "./dtos/ICreateCategoryDTO";

// data transfer object

interface ICategoryRepository{
findByNAme(name:string): Promise<Categoria>;
create({name,discricao}:ICreateCategariaDTO): Promise<void>;
liste_categaria():Promise<Categoria[]>;
deleteAll(name:string):Promise<void>;
}
export {ICategoryRepository,ICreateCategariaDTO}