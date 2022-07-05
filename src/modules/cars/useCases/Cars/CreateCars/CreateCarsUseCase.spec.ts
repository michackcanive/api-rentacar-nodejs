import { AppError } from "../../../../../errors/AppError";
import { ICreateCarsDTO } from "../../../repositories/Cars/ICarsRepository";
import { CarsRepositoryInMemory } from "../../../repositories/Cars/in-memory/CarsRepositoryInMemory";
import { CreateCarsUseCase } from "./CreateCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarsUseCase: CreateCarsUseCase;

describe("Criar Categoria", () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		createCarsUseCase = new CreateCarsUseCase(carsRepositoryInMemory);
	});

	it("Deve ser capaz de criar  um novo cars", async () => {
		const cars = {
			name: "cars 1",
			discricao: "teste",
			numero_licenca: 2123763,
			daily_rate: "Rua 32",
			lecense_placa: "12LDA-R56",
			brand: "wqfrer",
			fine_amount: 1000,
			id_category: "category",
		};

		/* Salvar */
		const carsNew = await createCarsUseCase.execute({
			name: cars.name,
			discricao: cars.discricao,
			brand: cars.brand,
			daily_rate: cars.daily_rate,
			fine_amount: cars.fine_amount,
			id_category: cars.id_category,
			lecense_placa: cars.lecense_placa,
			numero_licenca: cars.numero_licenca,
		});
		expect(carsNew).toHaveProperty("id");
	});

	it("espero que o  esteja lecense_placa não pode ser cadastrado mais de duas vez", () => {
		expect(async () => {
			const cars = {
				name: "cars 1",
				discricao: "teste",
				numero_licenca: 2123763,
				daily_rate: "Rua 32",
				lecense_placa: "12LDA-R56",
				brand: "wqfrer",
				fine_amount: 1000,
				id_category: "2",
			};

			await createCarsUseCase.execute({
				name: "cars 1",
				discricao: "teste",
				numero_licenca: 2123763,
				daily_rate: "Rua 32",
				lecense_placa: "12LDA-R56",
				brand: "wqfrer",
				fine_amount: 1000,
				id_category: "2",
			});
			await createCarsUseCase.execute({
				name: "cars 2",
				discricao: "teste",
				numero_licenca: 2123763,
				daily_rate: "Rua 32",
				lecense_placa: "12LDA-R56",
				brand: "wqfrer",
				fine_amount: 1000,
				id_category: "2",
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it("espero que o  o carro seja cadastrado com disponivel ou seja a varaial available por padrão seja true ", async () => {
		const cars = {
			name: "cars 1",
			discricao: "teste",
			numero_licenca: 2123763,
			daily_rate: "Rua 32",
			lecense_placa: "12LDA-R56",
			brand: "wqfrer",
			fine_amount: 1000,
			id_category: "2ttrv56678489389",
		};

		const resultado_cadastro = await createCarsUseCase.execute(cars);
		expect(resultado_cadastro.available).toBe(true);
	});
});
