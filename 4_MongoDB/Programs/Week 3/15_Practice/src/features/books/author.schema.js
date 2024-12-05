// Import the mongoose library
import mongoose from 'mongoose';

// Define the authorSchema
export const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Ensures no extra spaces are saved
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book' // Reference to the Book model
    }
  ]
});

// Export the Author model
const Author = mongoose.model('Author', authorSchema);
export default Author;
