const express = require("express");
const taskController = require("../controllers/tasks");
const router = express.Router();

router.post('/', taskController.insertOrUpdate);

module.exports = router;