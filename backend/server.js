require('dotenv').config() 

const express = require("express"); 
const mongoose = require("mongoose");
const cors = require("cors")
const workoutRoutes = require("./routes/workouts.js")
const UserModel = require("./models/User")

// express app
const app = express(); 

// middleware
app.use(express.json()) // to parse json data from the request body
app.use(cors())

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

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            }
         else {
            res.json("password incorrect")
        }
    } else {
        res.json("No record")
    }
    })

})


process.env 