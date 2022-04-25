import { Router } from "express";
import { SpecificationsRepository } from "../modules/car/repositories/Specification/SpecificationsRepository";
import { CreateSpecificationServices } from "../modules/car/services/CreateSpecificationServices";

const specificationRoutes = Router();
const specificationRepository=new SpecificationsRepository()

specificationRoutes.post("/create", (req, resp) => {
    const { name, discricao } = req.body;
    const CreateSpecificationService=new CreateSpecificationServices (specificationRepository)
    CreateSpecificationService.execute({name,discricao})

    return resp.status(201).json({
        erro:false,
        mensage:'Specificatio created viva 😀'
    })
  
});

specificationRoutes.get("/liste_specifications", (req, resp) => {
    const all=  specificationRepository.liste_specifications()
    return resp.status(200).json(all)
   });

export {specificationRoutes}
