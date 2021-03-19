const express = require("express");
// const usersController = require("../controllers/users");
const router = express.Router();
// const authorize = require('../_helpers/authorize')

router.all('*', (req,res,next) => {
    req.responseData = "Hello";
    next();
})

module.exports = router;