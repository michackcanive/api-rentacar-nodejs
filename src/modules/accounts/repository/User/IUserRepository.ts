import { User } from "../../entity/User";
import { ICreateUserDTO } from "./dtos/IUserRepositoryDTO";
// data transfer object
interface IUserRepository{
findByemail(email:string): Promise<User>;
create({name,email,numero_licenca,password,id,avatar}:ICreateUserDTO): Promise<void>;
findById(id:string):Promise<User>
//liste_categaria():Promise<User[]>;
}
export {IUserRepository,ICreateUserDTO}