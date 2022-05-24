import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("cars")
export class Cars {
	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
	@PrimaryColumn()
	id?: string;

	@Column()
	name: string;

	@Column()
	discricao: string;

	@Column()
	numero_licenca: string;

	@Column()
	daily_rate: number;

	@Column()
	available: boolean;

	@Column()
	lecense_placa: string;

	@Column()
	brand: boolean;

	@Column()
	fine_amount: number;

	id_category?: string;

	@CreateDateColumn()
	create_at: Date;
}
