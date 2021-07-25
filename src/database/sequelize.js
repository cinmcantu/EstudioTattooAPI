const { Sequelize } = require('sequelize')

module.exports = new Sequelize('estudio-tattoo', 'admin', 'pass', {
    dialect: 'sqlite',
    host: './src/database/database.sqlite',
    define: {
        underscored: true,
        underscoredAll: true,
    }
})