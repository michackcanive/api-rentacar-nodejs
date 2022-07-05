import { getRepository, Repository } from "typeorm";
import {
	ICarsRepository,
	ICreateCarsDTO,
} from "../../../../repositories/Cars/ICarsRepository";
import { Cars } from "../../entity/Cars";

class CarsRepository implements ICarsRepository {
	private repository: Repository<Cars>;

	constructor() {
		this.repository = getRepository(Cars);
	}

	async create({
		brand,
		daily_rate,
		discricao,
		fine_amount,
		id_category,
		lecense_placa,
		name,
		numero_licenca,
	}: ICreateCarsDTO): Promise<Cars> {
		const cars = this.repository.create({
			brand,
			id_category,
			daily_rate,
			discricao,
			fine_amount,
			lecense_placa,
			name,
			numero_licenca,
		});
		await this.repository.save(cars);

		return cars;
	}

	async liste_cars(): Promise<Cars[]> {
		const categorias = await this.repository.find();
		return categorias;
	}
	async deleteAll(lecense_placa: string): Promise<void> {
		const categorias = await this.repository.delete({ lecense_placa });
		const _a=''
	}

	async findBylecense_placa(lecense_placa: string): Promise<Cars> {
		const categaria = await this.repository.findOne({ lecense_placa });
		return categaria;
	}
}

export { CarsRepository };
