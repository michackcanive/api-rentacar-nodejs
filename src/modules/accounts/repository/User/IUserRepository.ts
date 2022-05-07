import { User } from "../../entity/User";
// data transfer object
interface ICreateUserDTO {
  
  name: string;
  email: string;
  numero_licenca: string;
  password: string;
  }
interface IUserRepository{
findByemail(email:string): Promise<User>;
create({name,email,numero_licenca,password}:ICreateUserDTO): Promise<void>;
//liste_categaria():Promise<User[]>;
}
export {IUserRepository,ICreateUserDTO}