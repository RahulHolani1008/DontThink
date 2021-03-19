const express = require("express");
const router = express.Router();

router.all('*', (req,res,next) => {
    res.send(req.responseData + " World!");
});

module.exports = router;