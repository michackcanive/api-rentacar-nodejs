import { Categoria } from "../../model/categaria";




// data transfer object
interface ICreateCategariaDTO {
    name: string;
    discricao: string;
  }

interface ICategoryRepository{
findByNAme(name:string):Categoria;
create({name,discricao}:ICreateCategariaDTO):void;
liste_categaria():Categoria[];

}


export {ICategoryRepository,ICreateCategariaDTO}