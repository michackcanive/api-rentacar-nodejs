
interface ISpecificationDTO{
    name:string,
    discricao:string
}

interface ISpecificationsRepository{
    create({name,discricao}:ISpecificationDTO):void
}

export {ISpecificationsRepository,ISpecificationDTO}