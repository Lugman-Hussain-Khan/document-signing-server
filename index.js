const express = require("express")
const mongoose = require("mongoose")
const { router } = require("./routes/routes")
require("dotenv").config()

const app = express()

//DB Connect
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("CONNECTED TO DATABASE")
)

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log("SERVER STARTED AT PORT:", PORT))
