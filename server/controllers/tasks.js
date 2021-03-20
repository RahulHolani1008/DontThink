const Task = require("../models/tasks");

exports.insertOrUpdate = async (req, res, next) => {
    if(req.requestData._id) {
        Task.findByIdAndUpdate(req.requestData._id,{ $set: req.requestData })
            .then((item) => {
                req.responseData = req.requestData;
                next();
            })
            .catch((err) => {
                req.responseData = "No task found with this ID";
                next();
            })
    } else {
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
    }
};

exports.viewAll = async (req, res, next) => {
    
};