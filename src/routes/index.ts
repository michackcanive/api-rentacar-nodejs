import { Router} from "express";
import { categarisRoutes } from "./category.routes";
import { specificationRoutes } from "./specification.routes";

const router=Router()

router.use('/categarias',categarisRoutes)
router.use('/specifications',specificationRoutes)

export {router}
