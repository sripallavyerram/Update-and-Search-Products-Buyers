const express = require("express");
const router = express.Router();

// Dummy buyer list
let buyers = [
    { id: 1, name: "Alice", email: "alice@example.com", location: "New York" },
    { id: 2, name: "Bob", email: "bob@example.com", location: "California" },
    { id: 3, name: "Charlie", email: "charlie@example.com", location: "Texas" }, 
    { id: 4, name: "David", email: "david@example.com", location: "Florida" },
   
];

// GET all buyers
router.get("/", (req, res) => {
    res.json(buyers);
});

module.exports = router;
