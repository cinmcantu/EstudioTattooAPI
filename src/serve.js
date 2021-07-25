// Packages
const express = require('express')
// Instances and variables
const app = express()
const port = 3003

// Database
const sequelize = require('./database/sequelize')
sequelize.sync().then(()=> console.log('Database is ready'))

// Middleware
app.use(express.json())

// Controllers
const portfolio = require('./controllers/portfolioController')

// Routes
portfolio(app)


// Listen
app.listen(port, () => {
    console.log(`Servidor aberto em http://localhost:${port}`)
})