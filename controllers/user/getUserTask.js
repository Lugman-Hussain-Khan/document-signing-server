const User = require("../../models/User")

const getUserTasks = async (req, res) => {
  const { userId } = req.params

  try {
    const userData = await User.findById(userId).populate(
      "assignedTasks",
      "_id processName createdAt"
    )

    if (userData) {
      res.status(200).json({
        assignedTasks: userData.assignedTasks,
      })
    } else {
      res.status(404).json({
        error: "invalid request",
        errorData: "user not found for the userId",
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = { getUserTasks }
