import { Router } from "express";
import multer from "multer";
import { UpdateUserAvatarControlles } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarControlles";
import { CreateUserController } from "../modules/accounts/useCases/User/createUser/CreateUserController";
import uploadConfigFile from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const userRoutes = Router();

const uploadAvatar = multer(uploadConfigFile.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarControlles = new UpdateUserAvatarControlles();

userRoutes.post("/create_user", createUserController.handle);
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarControlles.handle
);

export { userRoutes };
