  
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const compression = require('compression');
const helmet = require('helmet');
const encryptr = require('./encryptr.js');
const app = express();

const routes = require("./routes/routes.js");

// connectDB();
app.use(morgan("combined"));
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(compression());
app.use(helmet());
app.use('*',routes)
app.use('*', encryptr);
app.listen(8081);