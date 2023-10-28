import express, { Request, Response, NextFunction } from "express";

module.exports =
  (asyncFunction: any) => (req: Request, res: Response, next: NextFunction):any => {
    return Promise.resolve(asyncFunction(req, res, next)).catch(next);
  };

// module.exports = asyncHandler;
