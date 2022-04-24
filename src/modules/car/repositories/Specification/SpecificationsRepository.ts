import { Specification } from "../../model/Specification";
import { ISpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository{

    private specifications:ISpecificationDTO[];
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
}