const Quote = require("../models/Quote");

// Get all quotes
exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();

    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one random quote
exports.getRandomQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();

    const random = Math.floor(Math.random() * count);

    const quote = await Quote.findOne().skip(random);

    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get quote by ID
exports.getQuote = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);

    if (!quote) {
      return res.status(404).json({
        message: "Quote not found",
      });
    }

    res.json(quote);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add quote
exports.createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);

    res.status(201).json(quote);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Update quote
exports.updateQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(quote);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Delete quote
exports.deleteQuote = async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);

    res.json({
      message: "Quote deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};