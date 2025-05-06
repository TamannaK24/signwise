require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const UserModel = require("./models/User")

const { latestLetter } = require('./bridge');

app.get('/api/latest-letter', (req, res) => {
    res.json({ letter: latestLetter });
});


// express app
const app = express();

// middleware
app.use(cors())
app.use(express.json()) // to parse json data from the request body
app.use('/api/latest-letter', require('./routes/latestLetter'));


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Welcome message for server 
app.get("/", (req, res) => {
    res.send("Welcome to the SignWise API 👋");
});

// routes
// app.use("/api/workouts", workoutRoutes);
app.use("/api", signupRoutes);
app.use("/api", loginRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests 
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port and db is connected", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })


process.env 