import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { apis } from './routes';
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/auth-services', apis);

export default app;
