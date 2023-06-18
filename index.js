const express = require('express')
const app = express()
const perguntasController = require('./perguntas/perguntasController')
const BodyParser = require('body-parser')
const porta = 3000
const conn = require('./database/conexao')
const Perguntas = require('./perguntas/Perguntas')


conn.authenticate().then(() => {
    console.log('\n >>  OK!  << Banco de Dados Conectado!')
}).catch((erro) => {
    console.log(erro)
})

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', perguntasController)

app.get('/', (req, res) => {
    //res.render('home')
    Perguntas.findAll().then(perguntas => {
        res.render('home', { perguntas: perguntas })
    }).catch(erro => {
        console.log(erro)
    })

})



app.listen(porta, () => {
    console.log('\n >>  OK!  << Servidor Inicializado!!')
})