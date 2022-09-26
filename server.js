const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();


// environment variables
const PORT = process.env.PORT || 4000;

// init express
const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));



// listen port
app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`.bgGreen.black);
});