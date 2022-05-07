import { inject,injectable} from 'tsyringe'
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

    const user_is_existe = await this.usersreposity.findByemail(email);
    if (user_is_existe) {
      throw new Error("User Already exists !");
    }
    this.usersreposity.create({ name, email, password, numero_licenca });
  }

}

export { CreateUserUseCase };
