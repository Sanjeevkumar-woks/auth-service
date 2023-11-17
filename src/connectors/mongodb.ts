import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const connect = async () => {
    const dbName = 'shareFile';
    const host = 'cluster0.1cfhn.mongodb.net';
    const serviceName = 'auth-service';
    const userName = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    console.log(password);


    if (!userName || !password) {
        throw new Error(' Username and Password are Required');
    }

    const mongoUrl = `mongodb+srv://${userName}:${password}@${host}/${dbName}`;

    await mongoose.connect(mongoUrl, {
        readPreference: 'primary',
        connectTimeoutMS: 3000,
        socketTimeoutMS: 2000,
        appName: serviceName
    });

    console.log(`connected to MongoDb: ${host}`);
}
