import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repository/User/IUserRepository";

interface IRequest {
id_user:string,
file_avatar:string
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersreposity: IUserRepository
  ) {}
  async execute({id_user,file_avatar}: IRequest): Promise<void> {
    const user= await this.usersreposity.findById(id_user);
    user.avatar=file_avatar;
    await this.usersreposity.create(user)
  }
}

export { UpdateUserAvatarUseCase };
