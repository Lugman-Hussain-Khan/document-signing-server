const User = require("../../models/User")

const addTask = async (userId, processId) => {
  try {
    User.findByIdAndUpdate(
      userId,
      {
        $push: { assignedTasks: processId },
      },
      { new: true }
    ).exec((err, res) => {
      console.log(err, res)
    })
  } catch (error) {
    console.log(error)
  }
}

const removeTask = async (userId, processId) => {
  try {
    User.findByIdAndUpdate(
      userId,
      {
        $pull: { assignedTasks: processId },
      },
      { new: true }
    ).exec((err, res) => {
      console.log(err, res)
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { addTask, removeTask }
