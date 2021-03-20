const express = require("express");
// const taskController = require("../controllers/tasks");
const router = express.Router();

router.all('/1', (req, res, next) => {
    req.responseData = "WUTTA";
    console.log("WAIT")
    return next();
});

module.exports = router;