import { Router} from "express";
import { authRoutes } from "./auth.routes";
import { categarisRoutes } from "./category.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./user.routes";


const routers=Router()

routers.use('/categoria',categarisRoutes)
routers.use('/specifications',specificationRoutes)
routers.use('/user',userRoutes)
routers.use(authRoutes)

export {routers}
 