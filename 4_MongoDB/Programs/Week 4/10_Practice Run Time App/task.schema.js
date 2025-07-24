import mongoose from 'mongoose';

// Define the Task schema
const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,  // Task description is required
    },
    createdAt: {
        type: Date,
        default: Date.now,  // Automatically set the current date and time when the task is created
    },
});

// Create a Task model from the schema
const Task = mongoose.model('Task', taskSchema);

export default Task;
