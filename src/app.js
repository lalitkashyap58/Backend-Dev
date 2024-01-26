
import { express } from "express";
import cors from "cors";

import cookieParser from "cookie-parser";

const app=express();
app.use(cors({origin:process.env.CORS_ORIGIN,credentials:true}));


//when data is coming in json format
app.use(express.json({limit:"16kb"}));
//when data is coming  in urlencoded format
app.use(express.urlencoded({extended:true,limit:"16kb"}));

app.use(express.static("public"));


//cookies
app.use(cookieParser());
export {app};