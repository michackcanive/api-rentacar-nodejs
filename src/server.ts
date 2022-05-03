import express from "express";
import "./database"
import { router } from "./routes";
import swaggerUri from "swagger-ui-express";
import swaggerFile from "./swagger.json"
import swaggerFilev2 from "./swagger.v2.json"
import './shared/container'

const app = express();
app.use(express.json());
app.use(router)

app.use("/api-docs", swaggerUri.serve, swaggerUri.setup(swaggerFile))
app.use("/api-v2.docs", swaggerUri.serve, swaggerUri.setup(swaggerFilev2))
///////////////////////////////////////////
app.listen(3333, () => {
  console.log(
    `Hostname: localhost:3333 😀`, "\nServidor iniciado proximo nivel 🚀"
  );
});

