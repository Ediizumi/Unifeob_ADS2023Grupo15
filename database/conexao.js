const sequelize = require('sequelize')

const conn = new sequelize('dbSalao', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn