const express = require('express')
const paht = require('path')

const PORT = 3030

const app = new express()

app.get('/github-info',(req, res) =>{
    res.sendFile(paht.resolve('static','github-info.html'))
})

app.get('/', (req, res) => {
    res.send('privet ya server!')
})

app.listen(PORT, () => {
    console.log(`Сервер стартанул http://127.0.0.1:${PORT}`)
})