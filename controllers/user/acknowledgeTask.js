const process = require("../../models/process")
const { removeTask, addTask } = require("./updateTask")

const acknowledgeTask = async (req, res) => {
  const { userId } = req.params

  const { processId, acknowledgeStatus } = req.body

  try {
    await removeTask(userId, processId)
    await process
      .findByIdAndUpdate(
        processId,
        {
          $push: { acknowledgedList: userId },
          $inc: { iterationIndex: 1 },
        },
        { new: true }
      )
      .exec(async (err, response) => {
        if (response.iterationIndex < response.signerList.length) {
          await addTask(response.signerList[response.iterationIndex], processId)
          res.status(200).json({ message: "Acknowledgement recorded" })
        } else {
          await process.findByIdAndUpdate(processId, { active: false }).exec()
          res.status(200).json({ message: "Process completed successfully" })
        }
      })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { acknowledgeTask }
