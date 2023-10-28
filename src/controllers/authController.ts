import express, { Request, Response, NextFunction } from "express";
import { ErrorResponse, ResponseTemplate } from "../utils/templates";
import { AuthService } from "../services/authService";
import { ResponseType } from "../utils/types";

export class AuthController {
  authService = new AuthService();


//create user 
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const registeredUser = await this.authService.createUser(req.body);
      res.send(new ResponseTemplate(true, 200, "", registeredUser));

    } catch (error) {
      console.log(error);
      return next(new ErrorResponse(error, 400));
    }
  }
}
