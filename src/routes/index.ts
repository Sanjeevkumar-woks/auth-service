import express from 'express';
import { testApis } from './test';

export const apis = express.Router();

apis.get('/healthcheck', (req, res) => {
    res.status(200).send('OK');
})


//test APIs
apis.use('/test', testApis);
//auth-service API's
//apis.use('/users',userApis);

// internal Apis
//apis.use('/internal',internalApis);