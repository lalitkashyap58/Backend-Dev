// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// require('dotenv').config({path:'./env'});
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({path:'./env'});


const app = express();
connectDB();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERRR:", error);
//             throw error;
//         });
//         app.listen(process.env.PORT || 8080, () => {
//             console.log(`server is running on ${process.env.PORT || 8080}`);
//         });
//     } catch (error) {
//         console.log("Error", error);
//         throw error;
//     }
// })();


