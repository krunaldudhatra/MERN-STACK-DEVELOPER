import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'


const Book = mongoose.model("Book", bookSchema);
export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
      
            const book = new Book(bookData); // Create a new instance of the Book model
            return await book.save(); // Save the book to the database
        
    }

    //filtering the book by id
    async getOne(id) {
            const book = await Book.findById(id); // Find the book by its ID
            return book;
    }
}