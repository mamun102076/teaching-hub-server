const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const category = require('./data/course-categories.json')

const categorieDetail = require('./Data/course-details.json')

app.get('/', (req, res) => {
    res.send('course API runnung')
})

app.get('/categories', (req, res) => {
    res.send(category)
})

app.get('/categories/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const slectedCategory = categorieDetail.find(c => c.category_id === id)
    res.send(slectedCategory)
})

app.listen(port, () => {
    console.log("server is runnung", port)
})