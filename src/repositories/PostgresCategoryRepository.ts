import { Categoria } from "../model/categaria";
import { ICategoryRepository,ICreateCategariaDTO } from "./ICategoryRepository";


class PostgresCategoryRepository implements ICategoryRepository{
    findByNAme(name: string): Categoria {
return null
       // throw new Error("Method not implemented.");
    }
    create({name, discricao}:ICreateCategariaDTO): void {
        console.log(name,discricao)
        return null
       // throw new Error("Method not implemented.");
    }
    liste_categaria(): Categoria[] {
       
        return null
        //throw new Error("Method not implemented.");
    }

}


export{PostgresCategoryRepository}