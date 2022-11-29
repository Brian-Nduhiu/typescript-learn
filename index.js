"use strict";
//require express
const express = require('express');
//create a new express application instance
const app = express();
//define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});
//start the Express server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
