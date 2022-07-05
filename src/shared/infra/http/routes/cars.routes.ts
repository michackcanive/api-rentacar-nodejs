import { Router } from "express";
import { CreateCarsController } from "../../../../modules/cars/useCases/Cars/CreateCars/CreateCarsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const carsRoutes = Router();


const createCarsController = new CreateCarsController();

carsRoutes.use(ensureAuthenticated);

carsRoutes.post("/create", createCarsController.handle);


export { carsRoutes };
