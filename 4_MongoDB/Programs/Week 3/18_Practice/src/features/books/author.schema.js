import mongoose from 'mongoose';

// Define the author schema
export const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    // Create an array of book ObjectIds to represent the many-to-many relationship with books
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    }],
    // Create an array of review ObjectIds to represent the relationship with reviews
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',  // Reference to the 'Review' model
    }],
});
