import express from 'express';
import { AuthController } from '../controllers/authController';

const authRouter = express.Router();
const authController = new AuthController()

// authRouter.route("/register").get(register);
authRouter.post("/register", authController.createUser);


export default authRouter;