/*
__________________________________________________
        Packages are imported here
--------------------------------------------------
*/
const express = require('express');

const mangoose = require('mongoose');

const bodyParser = require('body-parser');

const routes = require('./routes/index')

const cors = require("cors");

//validate an req values in the server side
const expressValidator = require('express-validator');


//creating a express app
const app = express();


/*
__________________________________________________
        Application Level Middleware Defined Here
--------------------------------------------------
*/

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());

//req only takes utf-8 encoded req in the header
app.use(bodyParser.urlencoded({ extended: true }));

//Cross-Origin Resource Sharing in express using cors
//we are only accepting requests from one origin
app.use(cors({

    origin: 'http://127.0.0.1:3333',

}));    

/*
__________________________________________________
        Routes files to be imported here
--------------------------------------------------
*/

//defining route dierectory for the app
app.use('/', routes);


console.log("Created a express app");


module.exports = app;