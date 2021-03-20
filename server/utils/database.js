const mongoose = require("mongoose");
const db = process.env.DEVDB;

exports.connectDB = async () => {
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("MongoDB Connected!");
    })
    .catch((err) => {
      console.error(err);
    });
};
