import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repository/User/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticationUserCase {
  constructor(
    @inject("UsersRepository")
    private usersreposity: IUserRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    //const passwordHash =await bcrypt.hash(password,8);

    // Se user existe no sistema
    const user_is_existe = await this.usersreposity.findByemail(email);
    if (!user_is_existe) {
      throw new AppError("Email or password incorrect",401);
    }

    // comparar se a senha esta certa

    const passwordMatch = await compare(
      password,
      user_is_existe.password
    );
    if (!passwordMatch) {
      throw new Error("Email or password incorrect");
    }
    //Crianda o token jwt
    const token = sign({}, process.env.TOKEN_SECRET, {
      subject: user_is_existe.id,
      expiresIn: "1d",
    });
    const resultToken: IResponse = {
      user: {
        name: user_is_existe.name,
        email: user_is_existe.email,
      },
      token: token,
    };

    return resultToken;

    //this.usersreposity.create({ name , email, password, numero_licenca });
  }
}

export { AuthenticationUserCase };
