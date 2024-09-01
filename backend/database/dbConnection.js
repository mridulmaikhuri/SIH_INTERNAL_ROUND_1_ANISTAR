import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const mongoDbUrl = process.env.MONGO_URL;

if (!mongoDbUrl) console.error("No connection string specified");
let isConnected = false;

export const dbConnection = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) {
        return ;
    }

    try {
        await mongoose.connect(mongoDbUrl);
        isConnected = true;
    } catch (error) {
        console.error(error);
    }
}

