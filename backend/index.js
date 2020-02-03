const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const axios = require('axios')
const url = require('./urls/url')

app.use(bodyParser.json())
app.use(cors())

let lightList = []

axios
.get(url.allUrl, url.token)
.then(response => {
    lightList = response.data
})

app.get('/', (req, res) => {
    res.send('<h1>Lighthouse backend</h1>')
})

app.get('/lights', (req, res) => {
    res.json(lightList)
})

app.get('/lights/:id', (req, res) => {
    const id = req.params.id
    const lightOne = lightList.find(light => light.id === id)
    if(lightOne){
        res.json(lightOne)
    } else {
        res.status(404).end()
    }
})

app.patch('/lights/:id', (req, res) => {
    const light_id = req.params.id
    const light_update = req.body

    if( (light_update.power == null || undefined)&&(light_update.britness == null || undefined) ){
        return res.status(400).json({ error: "No data"})
    }
    for(let light of lightList){
        if(light.id === light_id){
            light.power = light_update.power
            light.britness = light_update.britness
            axios
            .put(url.baseUrl+light_id+url.state,light_update, url.token)
            .then(response =>
                res.status(response.status).send(response.data)
            )
            return null
        }
    }
    return res.status(400).json({ error: "wrong index"})
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})