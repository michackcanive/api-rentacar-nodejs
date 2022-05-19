import { CategoryRepositoryInMemory } from "../../../repositories/Category/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Criar Categoria",  () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory
    );
  });
  it("Deve ser capaz de criar  um nove Category", async () => {
    const categoria = {
      name: "Categoria tes",
      discricao: "ditecricao teste",
    };

    /* Salvar */
    await createCategoryUseCase.execute({
      name: categoria.name,
      discricao: categoria.discricao,
    });

/* Buscar */
    const is_creta = await categoryRepositoryInMemory.findByNAme(categoria.name);
   
    expect(is_creta).toHaveProperty('id')

  });
});
