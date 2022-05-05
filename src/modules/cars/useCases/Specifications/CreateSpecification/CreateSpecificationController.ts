import { Request, Response } from "express";
import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

class CreateSpecificationController {
 async handle(req: Request, resp: Response):Promise<Response> {
    const { name, discricao } = req.body;
    
    const createSpecificationUseCase=container.resolve(CreateSpecificationUseCase);
     await createSpecificationUseCase.execute({name,discricao})

    return resp.status(200).json({
      err0: false,
      discricao: "Specification cadastra",
    });
  }
}
export { CreateSpecificationController };
