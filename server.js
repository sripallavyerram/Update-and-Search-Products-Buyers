const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); 
require("dotenv").config(); 

const app = express();
const productRoutes = require("./routes/products");
const buyerRoutes = require("./routes/buyers");

// Middleware
app.use(express.json());

// Enable CORS for all origins
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend to access backend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/yourDatabaseName";
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Connect routes
app.use("/products", productRoutes);
app.use("/buyers", buyerRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
