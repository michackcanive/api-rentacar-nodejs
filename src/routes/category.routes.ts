import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/cars/useCases/Category/createCategoy/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/Category/ImportCategory";
import  listCategoryController  from "../modules/cars/useCases/Category/listCategory";

const upload = multer({
  dest: "./tmp",
});
const createCategoryController= new CreateCategoryController();
const categarisRoutes = Router();

categarisRoutes.post("/", createCategoryController.handle);

categarisRoutes.get("/", (req, resp) => {
return listCategoryController().handle(req, resp);
});

categarisRoutes.post("/import", upload.single("file"), (req, resp) => {
  return importCategoryController.handle(req, resp);
});

export { categarisRoutes };
