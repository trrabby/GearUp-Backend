import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import status from "http-status";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Welcome to Gear Up APIs",
  });
});

app.use("/api", router);

app.use(globalErrorHandler);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "api not found",
    error: {
      path: req.originalUrl,
      message: "your requested path is not found",
    },
  });
});

export default app;
