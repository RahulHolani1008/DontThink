const express = require("express");
const taskController = require("../controllers/tasks");
const router = express.Router();

router.post('/', taskController.insertOrUpdate);
router.get('/', taskController.viewAll);

module.exports = router;