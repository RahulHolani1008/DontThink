const Task = require("../models/tasks");

exports.insertOrUpdate = async (req, res, next) => {
  const newTask = new Task(req.requestData);
  await newTask
    .save()
    .then((item) => {
        req.responseData = item;
        next();
    })
    .catch((err) => {
        req.responseData = "ERROR 500";
        next();
    })
};