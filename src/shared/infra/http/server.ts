import express, { json, NextFunction, Response, Request } from "express";
import "express-async-errors";
import "../typeorm";
import { routers } from "./routes";
import swaggerUri from "swagger-ui-express";
import swaggerFile from "../../../swagger.json";

import "@shared/container";

import dotenv from "dotenv";
import { AppError } from "@errors/AppError";
dotenv.config();

const app = express();
app.use(express.json());
app.use(routers);

app.use("/api-docs", swaggerUri.serve, swaggerUri.setup(swaggerFile));
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

app.listen(process.env.HOST, () => {
  console.log(
    `Hostname: localhost: ${process.env.HOST}😀`,
    "\nServidor iniciado proximo nivel 🚀"
  );
});
