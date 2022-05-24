

import { CategoryRepositoryInMemory } from "../../../repositories/Categotery/in-memory/CategoryRepositoryInMemory";
import { CreateCarsUseCase } from "./CreateCarsUseCase";



let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCarsUseCase;

describe("Criar Categoria",  () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCarsUseCase(
      categoryRepositoryInMemory
    );
  });
  it("Deve ser capaz de criar  um novo cars", async () => {
    const categoria = {
      name: "cars tes",
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
