

//Multer is a Node.js middleware used for handling file uploads in 
//Express apps — like uploading images, PDFs, or any files from a form.


const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req,res,cb){
    cb(null, "uploads/");
  },
  filename: function (req,file,cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null,filename + "-" + uniqueSuffix + ".png");
  }
});


exports.upload = multer({storage:storage});