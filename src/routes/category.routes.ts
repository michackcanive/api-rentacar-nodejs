import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/Category/createCategoy";
import { importCategoryController } from "../modules/cars/useCases/Category/Import";
import { listCategoryController } from "../modules/cars/useCases/Category/listCategory";

const upload = multer({
  dest: "./tmp",
});

const categarisRoutes = Router();
categarisRoutes.post("/create", (req, resp) => {
  return createCategoryController.handle(req, resp);
});

categarisRoutes.get("/liste_categaria", (req, resp) => {
  return listCategoryController.handle(req, resp);
});

categarisRoutes.post("/import", upload.single("file"), (req, resp) => {
  return importCategoryController.handle(req, resp);
});

export { categarisRoutes };
