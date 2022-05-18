import "reflect-metadata"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity("categories")
export class Categoria_test_ {


  //@PrimaryColumn()
  id?: string;

  //@Column()
  discricao: string;

  //@Column()
  name: string;

  //@CreateDateColumn()
  create_at: Date;

  constructor() {

    if (!this.id) {
      this.id = uuidv4();
    }
  }
  
}
