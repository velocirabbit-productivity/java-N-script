const path = require('path');
const express = require('express');
const app = express.Router();
const authController = require('../controllers/authController');

const coffeeController = require('../controllers/coffeeController');


const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
//     next();
//   });


app.post('/signup', authController.addBcrypt, authController.createUser, (req, res) => { 
    res.sendStatus(200);
})
// app.post('/signup', coffeeController.readReviews, (req, res) => { 
//         res.sendStatus(200);
//     })


app.post('/login', authController.verifyUser, (req, res) => { 
    res.status(200).json({})
})

app.use(cors())


module.exports = app;