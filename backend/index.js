const express = require('express')
const { createtodo } = require('./types')
const { todo } = require('./db')
const app = express()
const port = 3000


app.use(express.json())

app.post('/todo', async(req, res) => {
    const createPayload = req.body;
    const parsePayLoad = createtodo.safeParse(createPayload);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong data",
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        desciption: createPayload.desciption,
        completed: false,
    })

    res.json({
        msg: "Task Added"
    })
})

app.get('/todos', async(req, res) => {
    const todos = await todo.find({})

    res.json({
        todos,
    })
})

app.put('/completed', async(req, res) => {
    const createPayload = req.body;
    const parsePayLoad = createtodo.safeParse(createPayload);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong data",
        })
        return;
    }

    await todo.update({
        _id: req.body.id,
    }), {
        complete: true,
    }

    res.json({
        msg: "Marked as completed",
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))