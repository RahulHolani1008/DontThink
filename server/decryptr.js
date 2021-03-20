const express = require("express");
const router = express.Router();

router.all('*', (req,res,next) => {
    req.requestData = req.body;
    next();
});

module.exports = router;