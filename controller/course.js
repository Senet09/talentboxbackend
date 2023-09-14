const course= require("../models/course");

exports.createCourse = async (req, res) => {
  try {
    const { title, icon} = req.body;


    if (!title || !icon) {
      return res.status(401).json({
        success: false,
        message: "please fill all the fields",
      });
    }



    const newCourseResponce = await course.create({
      title,
      icon
    });

    return res.status(200).json({
      success: true,
      message: "course Listed",
      newCourseResponce,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
      message: "Course not Listed successfully",
    });
  }
};

exports.getCourses = async (req, res) => {
  try {
    console.log("Req params",req.params);
    const responce = await course.find();
    return res.status(200).json({
      success: true,
      data: responce,
      message: "Course get successfully",
    });
  } catch (error) {
    return res.status(401).json({
      success:false,
      data:error.message,
      message:"Course not get successfully",
    })
  }
};

exports.getCourseById =async(req,res)=>{
   try {
    const {id} = req.body;

    if(!id)
    {
      return res.status(401).json({
        success:false,
        message:"id not found"
      })
    }

    const courseResponse = await course.findById(id);

    if(!courseResponse)
    {
      return res.status(401).json({
        success:false,
        message:"course not found"
      })
    }

    return res.status(200).json({
      success:true,
      data:courseResponse,
      message:"course get successfully",
    })
   } catch (error) {
    return res.status(401).json({
      success:false,
      data:error,
      message:"course not get successfully"
    })
   }

}
