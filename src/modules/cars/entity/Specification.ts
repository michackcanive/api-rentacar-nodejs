import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("specifications")
class Specification {

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

export { Specification };