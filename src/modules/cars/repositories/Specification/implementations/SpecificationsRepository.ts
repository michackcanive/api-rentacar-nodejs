import { Specification } from "../../../model/Specification";
import { ISpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository{

    private specifications:Specification[];

    constructor (){
        this.specifications=[];
    }

    create({ name, discricao }: ISpecificationDTO): void {
        const specification=new Specification();
        Object.assign(specification,{
            name,
            discricao,
            create_At: new Date()
        })
        this.specifications.push(specification);
        
    }
    search_has_Name_Specification(name:string):Specification{
        const specification = this.specifications.find(
            (specification) => specification.name === name
          );
          return specification;
    }

    liste_specifications(): Specification[] {
        return this.specifications;
      }
}


export {SpecificationsRepository}