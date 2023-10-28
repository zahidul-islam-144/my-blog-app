import { Request, Response, Application, NextFunction, ErrorRequestHandler } from 'express';

export const errorMiddleWare:ErrorRequestHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error!";
  
    if (!err) {
      return next();
    }

    
  // global error response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    stack: err.stack
  });
}