// backend/routes/login.js
const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Incoming /api/login:", email);

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("No user found:", email);
            return res.status(404).json("User not found");
        }
        if (user.password !== password) {
            console.log("Wrong password for:", email);
            return res.status(401).json("Incorrect password");
        }

        console.log("Login success:", email);
        return res.json("Success");
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json("Server error");
    }
});

module.exports = router;
