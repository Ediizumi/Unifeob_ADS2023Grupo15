const express = require('express')
const router = express.Router()
const Perguntas = require('./Perguntas')


router.get('/nova-pergunta', (req, res) => {
    res.render('cadperguntas')
})

router.get('/editar-pergunta/:id', (req, res) => {
    let perguntaId = req.params.id

    Perguntas.findByPk(perguntaId).then(pergunta => {
        //res.json(pergunta)
        res.render('editpergunta', { pergunta: pergunta })
    }).catch(erro => {
        console.log(erro)
    })

})
router.post('/salvar-pergunta', (req, res) => {
    let f_titulo = req.body.f_titulo
    let f_descricao = req.body.f_descricao

    Perguntas.create({
        titulo: f_titulo,
        descricao: f_descricao
    }).then(() => {
        res.redirect('/')
    }).catch(erro => {
        console.log(erro)
    })

})


router.post('/update-pergunta', (req, res) => {
    let { f_titulo, f_descricao, f_id } = req.body

    //res.send(f_id+'</br>'+f_titulo +'</br>'+ f_descricao)
    //UPDATE NOMEDATABELA SET CAMPO=NOVOVALOR WHERE ID=ID 

    Perguntas.update({
        titulo: f_titulo,
        descricao: f_descricao
    }, { where: { id: f_id } }).then(()=>{
        res.redirect('/')
    }).catch(erro =>{
        console.log(erro)
    })

})

module.exports = router