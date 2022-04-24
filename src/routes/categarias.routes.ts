import { Router } from "express";
import { CategoriasRepository } from "../repositories/CategoriasRepository";

const categarisRoutes = Router();
const categoriasreposity= new CategoriasRepository();



categarisRoutes.post("/create", (req, resp) => {
  const { name, discricao } = req.body;
  const categoria_is_existe=categoriasreposity.findName(name)
  if(categoria_is_existe){
      return resp.status(302).json({
          erro:true,
          mensage:'Categaria Already exists !'
      })
  }

  categoriasreposity.create({name,discricao})
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
