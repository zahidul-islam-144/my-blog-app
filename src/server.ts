import app from "./app";
import { Request, Response, Application, NextFunction } from "express";
import dotenv from "dotenv";
import { ResponseTemplate } from "./utils/templates";
import { ResponseType } from "./utils/types";

dotenv.config();
const port: number | string = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`>> Server is running at http://localhost:${port}`);
});

app.get(
  "/server-testing",
  (req: Request, res: Response, next: NextFunction) => {
    const sendResponse: ResponseType = new ResponseTemplate(
      true,
      200,
      "Connected to the testing route successfully."
    );
    res.send(sendResponse).end();
  }
);

// Handle Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(
    `>> uncaughtException: Shutting down the server due to:: ${err.message}`
  );
  process.exit(1);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err: any) => {
  console.log(
    `>> unhandledRejection: Shutting down the server due to:: ${err.message}`
  );
  process.exit(1);
});
