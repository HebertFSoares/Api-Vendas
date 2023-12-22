import express from "express";
import { Request, Response, NextFunction } from 'express';
import cors from "cors";
import router from "./routes/routes";
import AppError from "@shared/errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use((error: Error, req:Request, res:Response, next: NextFunction) => {
  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
  return res.status(500).json({
    status: 'error',
    message: "Internal server error",
  })
});
app.listen(3333, () => {
  console.log("Server started!")
})