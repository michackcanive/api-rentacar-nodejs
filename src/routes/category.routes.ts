import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategoy";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const categarisRoutes = Router();

categarisRoutes.post("/create", (req, resp) => {
  return createCategoryController.handle(req,resp);
});


categarisRoutes.get("/liste_categaria", (req, resp) => {
  return listCategoryController.handle(req,resp)
});



export { categarisRoutes };
