import { Request, Response } from "express";
import "reflect-metadata";
import { CreateCarsUseCase } from "./CreateCarsUseCase";
import { container } from "tsyringe";
class CreateCarsController {
	async handle(req: Request, resp: Response): Promise<Response> {
		const {
			name,
			discricao,
			numero_licenca,
			daily_rate,
			lecense_placa,
			brand,
			fine_amount,
			id_category,
		} = req.body;

		const createCategoryUseCase = container.resolve(CreateCarsUseCase);
		const cars = await createCategoryUseCase.execute({
			name,
			discricao,
			numero_licenca,
			daily_rate,
			lecense_placa,
			brand,
			fine_amount,
			id_category,
		});

		if (Boolean(cars)) {
			return resp.status(200).json({
				erro: false,
				discricao: "Cars cadastra",
				cars: cars,
			});
		}
	}
}
export { CreateCarsController };
