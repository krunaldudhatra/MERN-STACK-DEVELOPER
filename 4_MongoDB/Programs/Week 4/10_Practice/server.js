// Complete the server.js file to make user's add, delete and update the todos.
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import Task from './task.model.js';  // Assume this is your Task model

const app = express();
app.use(express.json());  // To parse incoming JSON requests
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// -------------------- Routes for CRUD operations ----------------------

// Add a new task
app.post('/tasks', async (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ message: "Task text is required" });
  }

  const task = new Task({ text });
  try {
    await task.save();
    io.emit('addTask', task);  // Broadcast task to all clients
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error saving task', error: err.message });
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    io.emit('deleteTask', id);  // Broadcast task deletion to all clients
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task', error: err.message });
  }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Task text is required' });
  }

  try {
    const task = await Task.findByIdAndUpdate(id, { text }, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    io.emit('updateTask', task);  // Broadcast task update to all clients
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error updating task', error: err.message });
  }
});

// -------------------- Socket.IO Events --------------------------

// Real-time event for adding tasks
io.on('connection', (socket) => {
  console.log('A user connected');

  // Fetch existing tasks on connection
  Task.find().then(tasks => {
    socket.emit('loadTasks', tasks);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});