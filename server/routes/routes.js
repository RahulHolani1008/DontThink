const express = require("express");
const taskRoutes = require("./tasks");
// const userRoutes = require("./users");
const router = express.Router();

router.use('/tasks', taskRoutes);

module.exports = router;