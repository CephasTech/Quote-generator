const bcrypt = require("bcrypt");

const Admin = require("../models/Admin");



// Login page

exports.loginPage=(req,res)=>{

res.render("login");

};




// Login

exports.login=async(req,res)=>{


const {username,password}=req.body;


const admin = await Admin.findOne({username});



if(!admin){

return res.send("Admin not found");

}



const checkPassword =
await bcrypt.compare(password,admin.password);



if(!checkPassword){

return res.send("Wrong password");

}



req.session.admin=true;


res.redirect("/admin");


};




// Logout

exports.logout=(req,res)=>{


req.session.destroy(()=>{

res.redirect("/login");

});


};
