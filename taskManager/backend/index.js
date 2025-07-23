const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/Task');
const cors = require('cors')

const app = express();

// cors  cross origin resource sharing
app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb+srv://vanshchauhan1310:XdIl8LeVhSkdzhqe@cluster0.henhavt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes

// CRUD Operations  => Create Read Update Delete 
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/api/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).send('Task not found');
    res.send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send('Task not found');
    res.send({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});