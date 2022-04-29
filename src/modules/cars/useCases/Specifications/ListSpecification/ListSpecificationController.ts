import { Request, Response } from "express";
import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

interface IRequest {
  name: string;
  discricao: string;
}
class CreateSpecificationController {
  constructor(private createSpecificationUseCase: ListSpecificationUseCase) {}

  handle(req: Request, resp: Response):Response {
   const specification=this.createSpecificationUseCase.execute()
    return resp.status(200).json(specification)
  }
}
export { CreateSpecificationController };
