import { Specification } from "../../entity/Specification"

interface ISpecificationDTO{
    name:string,
    discricao:string
}

interface ISpecificationsRepository{
    create({name,discricao}:ISpecificationDTO):void
    search_has_Name_Specification(name:string)
    liste_specifications(): Specification[]
}

export {ISpecificationsRepository,ISpecificationDTO}