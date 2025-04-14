require('dotenv').config() 

const express = require("express"); 
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts.js")

// express app
const app = express(); 

// middleware
app.use(express.json()) // to parse json data from the request body

app.use((req, res, next) => {
    console.log(req.path, req.method); 
    next(); 
})

// Welcome message for server 
app.get("/", (req, res) => {
    res.send("Welcome to the SignWise API 👋");
});

// routes
app.use("/api/workouts", workoutRoutes);
  
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