require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

const connectDB = require("./config/db");


const app = express();


// Connect MongoDB
connectDB();


// Middleware

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));


// Static files

app.use(express.static(path.join(__dirname,"public")));


// Session

app.use(session({

    secret:"randomQuoteSecret",

    resave:false,

    saveUninitialized:false

}));


// View engine

app.set("view engine","hbs");

app.set("views", path.join(__dirname,"views"));


// Routes

app.use("/", require("./routes/pages"));

app.use("/api", require("./routes/api"));



// Start server

app.listen(5000,()=>{

console.log("Server running");

});