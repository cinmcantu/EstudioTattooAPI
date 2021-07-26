// Packages
const express = require('express')
// Instances and variables
const app = express()
// const port = 3003
const port = process.env.PORT

// Database
const sequelize = require('./database/sequelize')
sequelize.sync({ force: true }).then(() => console.log('Database is ready'))

// Middleware
app.use(express.json())

// Controllers
const portfolio = require('./controllers/portfolioController')

// Routes
portfolio(app)

// // Test
// const test = require("./test/routes.test")
// test(app)

// Listen
app.listen(port, () => {
    console.log(`Servidor aberto em http://localhost:${port}`)
})