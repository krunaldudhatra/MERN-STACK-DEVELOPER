import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js';
import { reviewSchema } from './review.schema.js';
import { authorSchema } from './author.schema.js'; // Import Author schema

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);
const reviewModel = mongoose.model('Review', reviewSchema);
const authorModel = mongoose.model('Author', authorSchema); // Create Author model

export default class BookRepository {
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    async addReviewToBook(bookId, text, rating) {
        const reviewData = {
            text,
            rating,
            book: new mongoose.Types.ObjectId(bookId)
        };
        const review = new reviewModel(reviewData);
        const savedReview = await review.save();

        const book = await booksModel.findById(bookId);
        book.reviews.push(savedReview._id);

        await book.save();
        return savedReview;
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

    // Create a new author
    async createAuthor(authorData) {
        const author = new authorModel(authorData);
        const savedAuthor = await author.save();
        return savedAuthor;
    }

    // Add an author to a book
    async addAuthorToBook(bookId, authorId) {
        const book = await booksModel.findById(bookId);
        if (!book) {
            throw new Error('Book not found');
        }

        const author = await authorModel.findById(authorId);
        if (!author) {
            throw new Error('Author not found');
        }

        // Add the author's ID to the book's authors array
        book.authors.push(author._id);
        await book.save();

        // Optionally, you may want to add the book to the author's books array
        if (!author.books.includes(bookId)) {
            author.books.push(bookId);
            await author.save();
        }

        return { book, author };
    }

    // List all authors associated with a book
    async listAuthorsByBook(bookId) {
        const book = await booksModel.findById(bookId).populate('authors');
        if (!book) {
            throw new Error('Book not found');
        }
        return book.authors; // List of authors for the specified book
    }

    // List all books written by an author
    async listBooksByAuthor(authorId) {
        const author = await authorModel.findById(authorId).populate('books');
        if (!author) {
            throw new Error('Author not found');
        }
        return author.books; // List of books written by the specified author
    }
}
