import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/cars/useCases/Category/createCategoy/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/Category/ImportCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/Category/listCategory/ListCategoryController";

const upload = multer({
  dest: "./tmp",
});
const createCategoryController= new CreateCategoryController();
const importCategoryController= new ImportCategoryController();
const listCategoryController= new ListCategoryController();

const categarisRoutes = Router();

categarisRoutes.post("/", createCategoryController.handle);

categarisRoutes.get("/", listCategoryController.handle);

categarisRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categarisRoutes };
