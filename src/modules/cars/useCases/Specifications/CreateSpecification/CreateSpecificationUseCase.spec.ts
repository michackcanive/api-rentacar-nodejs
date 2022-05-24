
import { SpecificationsRepositoryInMemory } from "../../../repositories/Specification/in-memory/SpecificationsRepositoryInMemory";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

let createRepositoryInMemory:SpecificationsRepositoryInMemory;
let createSpecificationUseCase:CreateSpecificationUseCase;

describe("Criar Specificacao",  () => {

  beforeEach(()=>{
    createRepositoryInMemory=new SpecificationsRepositoryInMemory()
    createSpecificationUseCase=new CreateSpecificationUseCase(createRepositoryInMemory)
  })

  it('Espero criar uma especificao',async ()=>{
    const specificao={
      name:'Especi 1',
      dicricao:'Viva esmos juntos'
    }
   await createSpecificationUseCase.execute({name:specificao.name,discricao:specificao.dicricao})

   const is_create= await createRepositoryInMemory.search_has_Name_Specification(specificao.name)

   expect(is_create).toHaveProperty('id')

  })

});
