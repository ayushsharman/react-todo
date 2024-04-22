require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo: Todo,
};