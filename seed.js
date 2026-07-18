require("dotenv").config();

const connectDB = require("./config/db");
const Quote = require("./models/Quote");


const quotes = [

{
quote:"The future depends on what you do today.",
author:"Mahatma Gandhi",
category:"Success"
},

{
quote:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt",
category:"Motivation"
},

{
quote:"Do what you can, with what you have, where you are.",
author:"Theodore Roosevelt",
category:"Life"
},

{
quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
author:"Winston Churchill",
category:"Success"
},

{
quote:"Your time is limited, so don't waste it living someone else's life.",
author:"Steve Jobs",
category:"Motivation"
},

{
quote:"The only way to do great work is to love what you do.",
author:"Steve Jobs",
category:"Career"
},

{
quote:"It does not matter how slowly you go as long as you do not stop.",
author:"Confucius",
category:"Life"
},

{
quote:"Everything you've ever wanted is on the other side of fear.",
author:"George Addair",
category:"Motivation"
},

{
quote:"Hard work beats talent when talent doesn't work hard.",
author:"Tim Notke",
category:"Success"
},

{
quote:"Dream big and dare to fail.",
author:"Norman Vincent Peale",
category:"Inspiration"
}

];


const seedDatabase = async()=>{

try{

await connectDB();


await Quote.deleteMany();

console.log("Old quotes removed");


await Quote.insertMany(quotes);


console.log("Quotes added successfully");


process.exit();


}catch(error){

console.log(error);
process.exit(1);

}

};


seedDatabase();