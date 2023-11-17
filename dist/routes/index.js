"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apis = void 0;
const express_1 = __importDefault(require("express"));
const test_1 = require("./test");
exports.apis = express_1.default.Router();
exports.apis.get('/healthcheck', (req, res) => {
    res.status(200).send('OK');
});
//test APIs
exports.apis.use('/test', test_1.testApis);
//auth-service API's
//apis.use('/users',userApis);
// internal Apis
//apis.use('/internal',internalApis);
