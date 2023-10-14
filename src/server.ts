import express, { Request, Response, Application, NextFunction } from 'express';
import dotenv from 'dotenv';
import { ResponseTemplate, ResponseType } from './utils/responseTemplate';

dotenv.config();
const app:Application = express();
const port: number | string = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/server-test', (req: Request, res: Response, next:NextFunction) => {
  const sendResponse:ResponseType = new ResponseTemplate(true,200,'Connected to the testing route successfully.','');
  res.send(sendResponse).end();
});

// Handle Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`uncaughtException >> Shutting down the server due to:: ${err.message}`);
  process.exit(1);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err:any) => {
  console.log(`unhandledRejection >> Shutting down the server due to:: ${err.message}`);
  process.exit(1);
});

