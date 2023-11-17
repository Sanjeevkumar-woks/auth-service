"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleActivities = exports.testApis = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.testApis = (0, express_1.Router)();
exports.testApis.get('/', (0, express_async_handler_1.default)(async (req, res) => {
    res.send('Hello World');
}));
