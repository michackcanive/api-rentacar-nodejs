import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {

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
  email: string;

  @Column()
  numero_licenca: string;

  @Column()
  password: string;

  @Column()
  tipo_de_acesso: boolean;

  @CreateDateColumn()
  create_at: Date;
}
