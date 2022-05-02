import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Categoria {

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

  @PrimaryColumn()
  id?: string;

  @Column()
  discricao: string;

  @Column()
  name: string;

  @CreateDateColumn()
  create_at: Date;
}
