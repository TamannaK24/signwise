require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const latestLetterRoute = require("./routes/latestLetter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// API Welcome Route
app.get("/", (req, res) => {
    res.send("Welcome to the SignWise API 👋");
});

// Routes
app.use("/api", signupRoutes);
app.use("/api", loginRoutes);
app.use("/api/latestLetter", latestLetterRoute); // MongoDB-based letter fetching

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`✅ Server running on port ${process.env.PORT} and connected to MongoDB`);
        });
    })
    .catch((error) => {
        console.error("❌ MongoDB connection error:", error);
    });
