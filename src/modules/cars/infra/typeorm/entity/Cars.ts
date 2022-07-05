import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Categoria } from "./Categoria";

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
	numero_licenca: number;

	@Column()
	daily_rate: string;

	@Column()
	available: true;

	@Column()
	lecense_placa: string;

	@Column()
	brand: string;

	@Column()
	fine_amount: number;

	@ManyToOne(()=>Categoria)
	@JoinColumn({name:'id_category'})
	category?:Categoria;


	@Column()
	id_category?: string;

	@CreateDateColumn()
	create_at: Date;

}
