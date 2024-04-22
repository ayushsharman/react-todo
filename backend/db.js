const mongoose = require('mongoose')
const { boolean } = require('zod')

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: boolean,
})


const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo: todo,
}