const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser())
app.use(cors())

let lightList = [
    {
        "label": "Lamppu 1",
        "power": "on",
        "id": 1
    },
    {
        "label": "Lamppu 2",
        "power": "on",
        "id": 2
    },
    {
        "label": "Lamppu 3",
        "power": "on",
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

app.patch('/lights/:id', (req, res) => {
    const light_id = Number(req.params.id)

    const light_update = req.body

    for(let light of lightList){
        if(light.id == light_id){
            if(light_update.power != null || undefined){
                light.power = light_update.power
                return res.status(200).json({ message: "Updated Succesfully", data: light })
            }
        }
    }
    return res.status(404).json({ message: "Invalid Light Id" });
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})