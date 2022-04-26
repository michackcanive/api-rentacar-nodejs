import { Request, Response } from "express";
import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

interface IRequest {
  name: string;
  discricao: string;
}
class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, resp: Response) {
    const { name, discricao } = req.body;
    
    this.createSpecificationUseCase.execute({name,discricao})
    return resp.status(200).send()
  }
}
export { CreateSpecificationController };
