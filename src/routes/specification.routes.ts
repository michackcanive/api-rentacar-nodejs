import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/Specification/implementations/SpecificationsRepository";
import { createCategoryController } from "../modules/cars/useCases/Category/createCategoy";
import { createSpecificationController } from "../modules/cars/useCases/Specifications/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/Specifications/ListSpecification";

const specificationRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationRoutes.post("/create", (req, resp) => {
  return createSpecificationController.handle(req, resp);
});

specificationRoutes.get("/liste_specifications", (req, resp) => {
return listSpecificationController.handle(req,resp);
});

export { specificationRoutes };
