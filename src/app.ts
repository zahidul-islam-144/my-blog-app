import express, { Request, Response, Application } from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { errorMiddleWare } from './middlewares/errorMiddlewares';

// all routes
import authRouter from './routes/authRoute';


const app:Application = express();

// middlewares
app.use(helmet());
app.use(cors<Request>());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


// register route in the app
app.use('/auth', authRouter);





// error middleware
app.use(errorMiddleWare);


// app exported
export default app ;