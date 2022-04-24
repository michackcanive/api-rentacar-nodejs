import express from "express";
import { categarisRoutes } from "./routes/categarias.routes";

const app = express();
app.use(express.json());

app.use('/categarias',categarisRoutes)














///////////////////////////////////////////
app.listen(3333, () => {
  console.log(
    " hostname: localhost:3333 😀",
    "\n servidor iniciado proximo nivel 🚀"
  );
});
