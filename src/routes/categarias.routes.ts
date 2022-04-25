import { Router } from "express";
import { CategoriasRepository } from "../modules/car/repositories/Category/CategoriasRepository";
import { CreateCategoryServices } from "../modules/car/services/CreateCategoryServices";

const categarisRoutes = Router();
const categoriasreposity= new CategoriasRepository();

categarisRoutes.post("/create", (req, resp) => {

  const { name, discricao } = req.body;
  const CreateCategoryService=new CreateCategoryServices(categoriasreposity)
  CreateCategoryService.execute({name,discricao})


  return resp.status(201).json({
      erro:false,
      mensage:'category created 😀'
  })

});

categarisRoutes.get("/liste_categaria", (req, resp) => {
 const all=  categoriasreposity.liste_categaria()
 return resp.status(200).json(all)
});


export { categarisRoutes };
