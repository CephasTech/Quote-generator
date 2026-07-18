const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");


// Home page
router.get("/", (req, res) => {

    res.render("index");

});


// Login page
router.get("/login", adminController.loginPage);


// Login submit
router.post("/login", adminController.login);


// Logout
router.get("/logout", adminController.logout);


// Admin dashboard
router.get("/admin", (req,res)=>{


    if(!req.session.admin){

        return res.redirect("/login");

    }


    res.render("admin");

});


module.exports = router;