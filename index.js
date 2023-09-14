const express = require("express");
const cors  = require("cors");
const expressFileUpload = require("express-fileupload");
const dbConnect = require("./utils/dbconnect");
const userRoutes = require("./routes/user");
const cookieParser = require("cookie-parser");
const courseRoutes = require("./routes/course")
const port = process.env.PORT || 8000 
const app = express();


app.enable("trust proxy");
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(expressFileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp",
}))
app.listen(port,()=>{
    console.log(`App Is Started Port ${port}`)
})

app.get("/",(req,res)=>{
    return res.send("Your server is up and running ");
           
})
app.use("/api/v1",userRoutes);
app.use("/api/v1",courseRoutes);
dbConnect();