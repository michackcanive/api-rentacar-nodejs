interface ICreateCarsDTO {
	id?: string;
	//@Column()
	name: string;

	//@Column()
	discricao: string;

	//@Column()
	numero_licenca: number;

	//@Column()
	daily_rate: string;

	//@Column()
	available?: boolean;

	//@Column()
	lecense_placa: string;

	brand: string;

	fine_amount: number;
	//@Column()
	id_category: string;
}
export { ICreateCarsDTO };
