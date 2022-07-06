const User = require("../../models/User")

const createUser = async (req, res) => {
  const { username } = req.body

  const user = new User({
    username,
  })

  try {
    await user.save()
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
    res.status(422).json(error)
  }
}

module.exports = { createUser }
