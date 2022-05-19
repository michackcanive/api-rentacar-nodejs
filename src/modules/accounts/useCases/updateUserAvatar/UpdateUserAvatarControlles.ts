import { Request, Response } from "express";
import "reflect-metadata"
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarControlles {
  async handle(req: Request, resp: Response): Promise<Response> {
    const { id } = req.user;
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
    const file_avatar = req.file.filename;
    await updateUserAvatarUseCase.execute({ id_user: id, file_avatar });

    return resp.status(201).json({
      erro: false,
      status: "Avatar actulizado",
    });
  }
}
export { UpdateUserAvatarControlles };
