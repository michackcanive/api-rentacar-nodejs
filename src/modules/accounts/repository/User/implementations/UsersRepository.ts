import { User } from "../../../entity/User";
import { getRepository, Repository } from "typeorm";

import { IUserRepository, ICreateUserDTO } from "../IUserRepository";

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    numero_licenca,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      numero_licenca,
    });

    await this.repository.save(user);
  }

  async liste_categaria(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }

  async findByemail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { UsersRepository };
