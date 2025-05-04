const express = require("express");
const User = require("../models/User");    // CommonJS require

const router = express.Router();

router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    console.log("Incoming /api/register:", email, password);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User already exists:", email);
            return res.status(400).json("User already exists");
        }

        await User.create({ email, password });
        console.log("User created:", email);
        res.status(201).json("User created successfully");
    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json("Error creating user");
    }
});

module.exports = router;  // CommonJS export
