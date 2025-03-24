const express = require("express");
const router = express.Router();

// Dummy product list
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 10 },
    { id: 2, name: "Phone", category: "Electronics", price: 800, stock: 15 },
    { id: 3, name: "Watch", category: "Electronics", price: 1000, stock: 20 },
    { id: 4, name: "computer", category: "Electronics", price: 15000, stock: 15 }

];

// GET all products
router.get("/", (req, res) => {
    res.json(products);
});

module.exports = router;
