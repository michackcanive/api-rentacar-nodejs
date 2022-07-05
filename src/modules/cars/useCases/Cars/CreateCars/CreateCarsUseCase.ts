import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppError";
import { Cars } from "../../../infra/typeorm/entity/Cars";
import { ICarsRepository } from "../../../repositories/Cars/ICarsRepository";

interface IRequest {
	name: string;
	discricao: string;
	numero_licenca: number;
	daily_rate: string;
	lecense_placa: string;
	brand: string;
	fine_amount: number;
	id_category: string;
}

@injectable()
class CreateCarsUseCase {
	constructor(
		@inject("CarsRepository")
		private carsreposity: ICarsRepository
	) {}
	async execute({
		name,
		discricao,
		numero_licenca,
		daily_rate,
		lecense_placa,
		brand,
		fine_amount,
		id_category,
	}: IRequest): Promise<Cars> {

		const cars_is_existe = await this.carsreposity.findBylecense_placa(lecense_placa);

		if (cars_is_existe) {
			throw new AppError("Cars Already exists !");
		}

		const cars = await this.carsreposity.create({
			name,
			discricao,
			numero_licenca,
			daily_rate,
			lecense_placa,
			brand,
			fine_amount,
			id_category,
		});
		return cars;
	}
}

export { CreateCarsUseCase };
