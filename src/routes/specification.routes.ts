import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/Specifications/CreateSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/Specifications/ListSpecification/ListSpecificationController";

const specificationRoutes = Router();


const createSpecificationController = new CreateSpecificationController();
const listSpecificationController =new ListSpecificationController();

specificationRoutes.use(ensureAuthenticated);

specificationRoutes.post("/create", createSpecificationController.handle);

specificationRoutes.get("/liste_specifications", listSpecificationController.handle);

export { specificationRoutes };
