<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9Y_hsyTH32-gVSaTWwZuttmiHIi612T9Rg&usqp=CAU">

## REST API with Express Server

This is our first REST API for React JS App.

## First clone this repo and then install it's packages

```console
$ npm install
```

## Server Structure

```js
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
```

## Packages

* Express Js
* Nodemon
* Multer
* Colors
* dotenv

