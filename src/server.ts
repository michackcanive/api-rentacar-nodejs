import express from "express";
import { categarisRoutes } from "./routes/categarias.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();
app.use(express.json());

app.use('/categarias',categarisRoutes)
app.use('/specifications',specificationRoutes)














///////////////////////////////////////////
app.listen(3333, () => {
  console.log(
    " hostname: localhost:3333 😀",
    "\n servidor iniciado proximo nivel 🚀"
  );
});
