const { createProcess } = require("../controllers/process/create")
const { viewProcess } = require("../controllers/process/view")
const { acknowledgeTask } = require("../controllers/user/acknowledgeTask")
const { createUser } = require("../controllers/user/create")
const { getUserTasks } = require("../controllers/user/getUserTask")

const router = require("express").Router()

router.get("/", (req, res) => res.send("Working"))

//User
router.post("/user", createUser)
router.get("/user/:userId", getUserTasks)
router.post("/user/:userId/acknowledge", acknowledgeTask)

//Process
router.post("/process", createProcess)
router.get("/process/:processId", viewProcess)

module.exports = { router }
