const mongoose = require("mongoose");
const {MONGO_USER,MONGO_PASSWORD,MONGO_IP,MONGO_PORT} = require("../config/config");    
require("dotenv").config();
const dbConnect = ()=>{
    mongoose.connect(`mongodb+srv://utkarshsinghco:Utk97096@cluster0.327jglz.mongodb.net/`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log("Db is connected"),(err)=>{console.log(err);console.log("Db is not connected")})
}

module.exports = dbConnect;