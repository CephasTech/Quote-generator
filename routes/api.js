const express = require("express");
const router = express.Router();

const {
  getQuotes,
  getRandomQuote,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} = require("../controllers/quoteController");

router.get("/quotes", getQuotes);

router.get("/quotes/random", getRandomQuote);

router.get("/quotes/:id", getQuote);

router.post("/quotes", createQuote);

router.put("/quotes/:id", updateQuote);

router.delete("/quotes/:id", deleteQuote);

module.exports = router;