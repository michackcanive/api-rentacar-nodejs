import express, { json, NextFunction, Response, Request } from "express";
import "express-async-errors";
import "./database";
import { routers } from "./routes";
import swaggerUri from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import swaggerFilev2 from "./swagger.v2.json";
import "./shared/container";
import { AppError } from "./errors/AppError";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(routers);

app.use("/api-docs", swaggerUri.serve, swaggerUri.setup(swaggerFile));
app.use("/api-v2.docs", swaggerUri.serve, swaggerUri.setup(swaggerFilev2));
///////////////////////////////////////////
app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return resp.status(err.statusCode).json({
      message: err.message,
    });
  }
  return resp.status(500).json({
    status: "error",
    error: `internal error ${err.message}`,
  });
});

app.listen(3333, () => {
  console.log(
    `Hostname: localhost:3333 😀`,
    "\nServidor iniciado proximo nivel 🚀"
  );
});
