
import { Specification_teste_ } from "../../../entity/Specification_test_";
import { ISpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory  implements ISpecificationsRepository{
    Specificatoes:Specification_teste_[]=[];
  async  create({ name, discricao }: ISpecificationDTO): Promise<void> {
        const specificao=new Specification_teste_();
        Object.assign(specificao,{
            name,
            discricao
        })
        this.Specificatoes.push(specificao)
      
    }
   async search_has_Name_Specification(name: string): Promise<Specification_teste_> {
       const spesficao=this.Specificatoes.find((spesficao)=>spesficao.name===name)
       return spesficao;
    }
  async  liste_specifications(): Promise<Specification_teste_[]> {
       return this.Specificatoes;
    }

}

export{SpecificationsRepositoryInMemory}