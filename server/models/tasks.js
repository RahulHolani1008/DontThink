const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: { required: true, type: String },
  deleted: { type: Boolean, default: false },
  priority: { type: Number, default: 0.24 },
  severity: { type: Number, default: 0.85 },
  description: { type: String, default: null },
  dueDate: { default: null, type: Date }
});

module.exports = mongoose.model("Tasks", taskSchema);