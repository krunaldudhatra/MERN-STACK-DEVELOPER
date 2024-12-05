// Import Mongoose
import mongoose from 'mongoose';

// Define the schema for messages
const messageSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    text: { 
        type: String, 
        required: true 
    },
    room: { 
        type: String, 
        required: true 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
});

// Create the Message model
export const Message = mongoose.model('Message', messageSchema);