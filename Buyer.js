const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    location: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Buyer", buyerSchema);
