import mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    // -----------------modify authors here-----------------
    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author', // Reference to the Author model
        }
    ],

    genre: {
        type: String,
        required: true,
        enum: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Other'],
    },
    copies: {
        type: Number,
        required: true,
        min: 1,
    },
    availableCopies: {
        type: Number,
        required: true,
        min: 0,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }]
});

// Export the Book model
const Book = mongoose.model('Book', bookSchema);
export default Book;
