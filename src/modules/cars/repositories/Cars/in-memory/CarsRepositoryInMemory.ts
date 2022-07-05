import { Cars } from "../../../infra/typeorm/entity/Cars";
import { Cars_test_ } from "../../../infra/typeorm/entity_test/Cars_test_";

import { ICarsRepository, ICreateCarsDTO } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
	Cars: Cars_test_[] = [];

	async findBylecense_placa(lecense_placa: string): Promise<Cars_test_> {
		const cars = this.Cars.find((Cars) => Cars.lecense_placa === lecense_placa);
		return cars;
	}

	async create({
		brand,daily_rate,discricao,fine_amount,id_category,lecense_placa,name,numero_licenca
	 }: ICreateCarsDTO): Promise<Cars_test_> {
		const cars = new Cars_test_();

		Object.assign(cars, {
			name,
			discricao,
			numero_licenca,
			daily_rate,
			lecense_placa,
			brand,
			fine_amount,
			id_category
		});

		this.Cars.push(cars);

		return cars;

	}
	async liste_cars(): Promise<Cars_test_[]> {
		const list = this.Cars;
		return list;
	}
	deleteAll(name: string): Promise<void> {
		throw new Error("Method not implemented.");
	}
}

export { CarsRepositoryInMemory };
