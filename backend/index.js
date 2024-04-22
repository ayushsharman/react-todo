const express = require('express')
const { createtodo } = require('./types')
const app = express()
const port = 3000


app.use(express.json())

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsePayLoad = createtodo.safeParse(createPayload);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong data",
        })
        return;
    }
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const createPayload = req.body;
    const parsePayLoad = createtodo.safeParse(createPayload);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong data",
        })
        return;
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))