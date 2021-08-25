// Packages
const express = require('express')
const cors = require('cors')
// Instances and variables
const app = express()


// Database
const sequelize = require('./database/sequelize')
sequelize.sync({}).then(() => console.log('Database is ready'))

// Middleware
app.use(express.json())
app.use(cors())

// Controllers
const portfolio = require('./controllers/portfolioController')

// Routes
portfolio(app)

module.exports = app