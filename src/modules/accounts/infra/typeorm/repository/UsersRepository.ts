
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO, IUserRepository } from "../../../repository/User/IUserRepository";
import { User } from "../entity/User";

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
    id,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      numero_licenca,
      id,
      avatar,
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

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };
