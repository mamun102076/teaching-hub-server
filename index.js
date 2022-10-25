const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const category = require('./data/course-categories.json')

app.get('/', (req, res) => {
    res.send('course API runnung')
})

app.get('/categories', (req, res) => {
    res.send(category)
})

app.get('/categories/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const slectedCategory = category.find(c => c._id === id)
    res.send(slectedCategory)
})

app.listen(port, () => {
    console.log("server is runnung", port)
})