
const express = require("express")
const weatherRouter = require("./routers/weather")
const app = express()
const cors = require('cors')
const morgan = require('morgan')
app.use(cors())
app.use(morgan('short'))
app.use(express.json())
app.use('/api/v1', weatherRouter)

module.exports = app

