const process = require("../../models/process")

const viewProcess = async (req, res) => {
  const { processId } = req.params

  try {
    const processData = await process.findById(processId)
    if (processData) {
      return res.status(200).json(processData)
    } else {
      res.status(404).json({
        error: "Process not found",
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = { viewProcess }
