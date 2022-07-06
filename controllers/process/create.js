const process = require("../../models/process")
const User = require("../../models/User")
const { addTask } = require("../user/updateTask")

const createProcess = async (req, res) => {
  const { processName, processOwner, signerList } = req.body

  const newProcess = new process({
    processName,
    processOwner,
    signerList,
    active: true,
  })

  try {
    await newProcess.save()
    res.status(200).json(newProcess)

    //Trigger sign request for the first signer
    const firstSignerId = signerList[0]
    addTask(firstSignerId, newProcess._id)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = { createProcess }
