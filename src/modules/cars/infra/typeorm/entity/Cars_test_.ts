import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("cars")
export class Cars {
	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
	//@PrimaryColumn()
	id?: string;

	//@Column()
	name: string;

	//@Column()
	discricao: string;

	//@Column()
	numero_licenca: string;

	//@Column()
	daily_rate: string;

	//@Column()
	available: string;

	//@Column()
	lecense_placa: string;

	//@Column()
	id_category: string;

	//@CreateDateColumn()
	create_at: Date;
}
