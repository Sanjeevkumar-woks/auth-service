"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connect = async () => {
    const dbName = 'shareFile';
    const host = 'cluster0.1cfhn.mongodb.net';
    const serviceName = 'auth-service';
    const userName = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    console.log(userName);
    if (!userName || !password) {
        throw new Error(' Username and Password are Required');
    }
    const mongoUrl = `mongodb+srv://${userName}:${password}@${host}/${dbName}`;
    await mongoose_1.default.connect(mongoUrl, {
        readPreference: 'primary',
        connectTimeoutMS: 3000,
        socketTimeoutMS: 2000,
        appName: serviceName
    });
    console.log(`connected to MongoDb: ${host}`);
};
exports.connect = connect;
