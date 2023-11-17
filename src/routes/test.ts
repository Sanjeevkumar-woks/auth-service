import { Request, Response, Router } from 'express';
import asyncFunction from 'express-async-handler';

export const testApis = Router();

export let sampleActivities: any;

testApis.get(
    '/',
    asyncFunction(async (req: Request, res: Response) => {
        res.send('Hello Sanjeev');
    })
);
