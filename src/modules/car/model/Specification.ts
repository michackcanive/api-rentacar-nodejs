import { v4 as uuidv4 } from "uuid";

class Specification {
  id?: string;
  discricao: string;
  name: string;
  create_At: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
export { Specification };