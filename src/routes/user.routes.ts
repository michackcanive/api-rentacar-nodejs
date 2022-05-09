import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/User/createUser/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/create_user", createUserController.handle);


export { userRoutes };
