const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser)

let lightList = [
    {
        "name": "Lamppu 1",
        "switch": false,
        "id": 1
    },
    {
        "name": "Lamppu 2",
        "switch": true,
        "id": 2
    },
    {
        "name": "Lamppu 3",
        "switch": true,
        "id": 3
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/lights', (req, res) => {
    res.json(lightList)
})

app.get('/lights/:id', (req, res) => {
    const id = Number(req.params.id)
    const lightOne = lightList.find(light => light.id === id)
    if(lightOne){
        res.json(lightOne)
    } else {
        res.status(404).end()
    }
})

app.patch('/lights/:id', (req, res)) => {
    const light_id = Number(req.params.id)

    const light_update = res.body

    for(let light of lightList){
        if(light.id == light_id){
            if(light_update.name != null || undefined)
                light.name = light_update.name
        }
    }
}

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})