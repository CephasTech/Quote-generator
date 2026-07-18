require("dotenv").config();

const bcrypt=require("bcrypt");

const connectDB=require("./config/db");

const Admin=require("./models/Admin");



async function createAdmin(){


await connectDB();



const password =
await bcrypt.hash("admin123",10);



await Admin.create({

username:"admin",

password

});


console.log("Admin created");


process.exit();


}



createAdmin();