import {hash}  from 'bcryptjs';
import { Hash,verify } from 'crypto';
import { inject,injectable} from 'tsyringe'
import { AppError } from '../../../../../errors/AppError';
import { IUserRepository } from '../../../repository/User/IUserRepository';


interface IRequest {
  name: string,
   email: string,
   password: string,
   numero_licenca: string
}

@injectable()
class CreateUserUseCase  {
  constructor(
    @inject("UsersRepository")
    private usersreposity: IUserRepository) {
  }
 async execute({ name, email, password, numero_licenca }: IRequest):Promise<void> {

 const passwordHash =await hash(password,8);

    const user_is_existe = await this.usersreposity.findByemail(email);
    if (user_is_existe) {
      throw new AppError("User Already exists !");
    }
    this.usersreposity.create({ name, email, password:passwordHash, numero_licenca });
  }

}

export { CreateUserUseCase };
