import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { container } from "tsyringe";
class ListSpecificationController {
 async handle(req: Request, resp: Response):Promise<Response> {

   const createSpecificationUseCase= container.resolve(ListSpecificationUseCase);
  const specification=  await createSpecificationUseCase.execute()
    return resp.status(200).json(specification)
  }
}
export { ListSpecificationController };
