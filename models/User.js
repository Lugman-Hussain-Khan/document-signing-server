const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  assignedTasks: [{ type: ObjectId, ref: "Process" }],
  createAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("User", userSchema)
