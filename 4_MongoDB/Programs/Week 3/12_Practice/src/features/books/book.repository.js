// No need to change prewritten code

// -----------pre-written code starts--------------------

import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { reviewSchema } from './review.schema.js';

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

// creating model for review.
const reviewModel = mongoose.model('Review', reviewSchema);

export default class BookRepository {
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    
    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }
    
    async listBooksByGenre(genre) {
        const books = await booksModel.find({ genre });
        return books;
    }
    
    async updateBookAvailability(bookId, quantity) {
        
        console.log(bookId);
        const book = await booksModel.findById(bookId);
        
        // Calculate the new availableCopies value
        const newAvailableCopies = book.availableCopies + quantity;
        
        // Update the availableCopies field and save the book
        book.availableCopies = newAvailableCopies;
        
        await book.save();
        return book;
    }

    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndRemove(bookId);
        return deletedBook;
    }

    //------------------pre-written code ends--------------------------

    // Complete the function below
    
    // adding review to a particular book
   // adding review to a particular book
async addReviewToBook(bookId, text, rating) {
    // Step 1: Create a new review document
    const reviewData = {
        text,
        rating,
        book: new mongoose.Types.ObjectId(bookId)  // Associate this review with the book
    };
    const review = new reviewModel(reviewData);

    // Save the review to the database
    const savedReview = await review.save();

    // Step 2: Find the book by its ID and add the review to its 'reviews' array
    const book = await booksModel.findById(bookId);

    if (!book) {
        throw new Error('Book not found');
    }

    book.reviews.push(savedReview._id);  // Push the review's ID to the book's reviews array

    // Step 3: Save the book with the new review
    await book.save();

    return savedReview;  // Return the saved review
}

}