const express = require('express');
const { createtodo } = require('./types');
const { Todo } = require('./db'); // Correct import statement
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/todo', async(req, res) => {
    const createPayload = req.body;
    const parsePayLoad = createtodo.safeParse(createPayload);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong data",
        });
        return;
    }

    await Todo.create({ // Corrected to use Todo model
        title: createPayload.title,
        description: createPayload.description, // Corrected typo in property name
        completed: false,
    });

    res.json({
        msg: "Task Added"
    });
});

app.get('/todos', async(req, res) => {
    const todos = await Todo.find({});

    res.json({
        todos,
    });
});

app.put('/completed', async(req, res) => {
    const createPayload = req.body;
    const parsePayLoad = createtodo.safeParse(createPayload);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent wrong data",
        });
        return;
    }

    await Todo.updateOne({ // Corrected to use updateOne method
        _id: req.body.id,
    }, {
        completed: true, // Corrected property name
    });

    res.json({
        msg: "Marked as completed",
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));