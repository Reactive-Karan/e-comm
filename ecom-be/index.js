const express = require('express')
require("./db/config")
const User = require("./db/models/user")
const cors = require('cors')
const app = express()


app.use(cors())
//Getting body in json
app.use(express.json())


app.post("/register", async (req, res) => {
    let user = new User(req.body)
    let result = await user.save()
    res.send(result)
})

app.get("/", (req, res) => {
    res.send("Hey")
})


app.listen(8080)