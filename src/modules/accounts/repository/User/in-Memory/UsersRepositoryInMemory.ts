import { User_test_ } from "../../../entity/User_test_";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";

class UsersRepositoryInMemory implements IUserRepository {
    Users:User_test_[]=[];
   async findByemail(email: string): Promise<User_test_> {
        return this.Users.find((User)=>User.email===email)
    }

  async  create({ name, email, numero_licenca, password, id, avatar }: ICreateUserDTO): Promise<void> {
        const user= new User_test_();
        Object.assign(user,{
            name,
            email,
            numero_licenca,
            password,
        })
        this.Users.push(user);
    }
  async  findById(id: string): Promise<User_test_> {
        return this.Users.find((User)=>User.id===id)
    }

}

export{UsersRepositoryInMemory}