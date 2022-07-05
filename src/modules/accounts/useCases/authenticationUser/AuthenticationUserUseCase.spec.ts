import "reflect-metadata"
import { AppError } from "../../../../errors/AppError";
import { UsersRepositoryInMemory } from "../../repository/User/in-Memory/UsersRepositoryInMemory";
import { ICreateUserDTO } from "../../repository/User/IUserRepository";
import { CreateUserUseCase } from "../User/createUser/CreateUserUseCase";
import { AuthenticationUserCase } from "./AuthenticationUserCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticationUserCase: AuthenticationUserCase;
let createUserUseCase: CreateUserUseCase;
describe("autenticação User", () => {
  beforeEach(async () => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticationUserCase = new AuthenticationUserCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });
  it("espero que tenha uma autenticaçºao do user ", async () => {
    const user: ICreateUserDTO = {
      name: "User teste",
      email: "mechack@teste.com",
      password: "1234",
      numero_licenca: "985473893",
    };
    await createUserUseCase.execute(user);
    const is_token = await authenticationUserCase.execute({
      email: user.email,
      password: user.password,
    });
    expect(is_token).toHaveProperty('token')
  });
  it('espero que não tenha autenticcação do user',async()=>{
      expect(async()=>{
        await authenticationUserCase.execute({
            email: 'erro@teste.com',
            password: '12345',
          })
      }).rejects.toBeInstanceOf(AppError)
  })

  it(('espero que o senha esteja incorreta'),()=>{
      expect(async()=>{
        const user: ICreateUserDTO = {
            name: "User teste",
            email: "mechack@teste.com",
            password: "1234",
            numero_licenca: "985473893",
          };
          await createUserUseCase.execute(user);
          const is_token = await authenticationUserCase.execute({
            email: user.email,
            password: '76495',
          });
      }).rejects.toBeInstanceOf(AppError)
  })
});
