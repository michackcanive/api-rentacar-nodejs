import { Router } from "express";
import { AuthUserController } from "@modules/accounts/useCases/authenticationUser/AuthUserController";


const authRoutes = Router();

const authUserController = new AuthUserController();

authRoutes.post("/auth", authUserController.handle);

export { authRoutes };
