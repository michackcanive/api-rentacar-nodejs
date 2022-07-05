import { Cars } from "../../infra/typeorm/entity/Cars";
import { Categoria } from "../../infra/typeorm/entity/Categoria";
import { ICreateCarsDTO } from "./dtos/ICreateCarsDTO";

// data transfer object

interface ICarsRepository{
findBylecense_placa(lecense_placa:string): Promise<Categoria>;
create({
	name,
	discricao,
	numero_licenca,
	daily_rate,
	lecense_placa,
	brand,
	fine_amount,
	id_category}:ICreateCarsDTO): Promise<Cars>;
liste_cars():Promise<Categoria[]>;
deleteAll(lecense_placa:string):Promise<void>;
}
export {ICarsRepository,ICreateCarsDTO}
