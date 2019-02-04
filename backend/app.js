const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const config = require('./config/database');
const users = require('./controllers/users');

// Connect mongoose to our database
mongoose.connect(config.database);

const app = express();

//Declaring Port
const port = 3000;

// Middleware for CORS
app.use(cors());

// Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use('/api/users', users);


// Starting page
app.use(express.static(path.join(__dirname, 'dist/LostAndFound')));

app.use((req,res,next) => {
    res.sendFile(path.join(__dirname,"dist/LostAndFound",index.html));
})

//Listen to port 3000
app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});

module.exports = app;
