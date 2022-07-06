const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const processSchema = new mongoose.Schema({
  processName: {
    type: String,
    required: true,
  },
  processOwner: {
    type: String,
    required: true,
  },
  signerList: [{ type: ObjectId, ref: "User" }],
  acknowledgedList: [{ type: ObjectId, ref: "User" }],
  iterationIndex: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Process", processSchema)
