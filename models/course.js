const mongoose = require("mongoose")


const CourseSchema = new mongoose.Schema({
    title:{
        type:String
    },
 
    icon:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
      
    },
    
    
})

module.exports = mongoose.model("Courses",CourseSchema);