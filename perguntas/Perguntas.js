const sequelize = require('sequelize')
const conn = require('../database/conexao')

const Perguntas = conn.define('perguntas', {
    titulo: {
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: false
    }
})

// Perguntas.sync({ force: true })

module.exports = Perguntas