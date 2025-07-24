import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async (req, res) => { 
        try {
            const bookData = req.body; // Get book data from the request body
            const book = await this.bookRepository.createBook(bookData); // Call the repository function to create the book
            res.status(201).json(book); // Send success response
        } catch (error) {
            res.status(500).json({ error: "Failed to create a new book"}); // Handle and send validation or other errors
        }
    }

    // filtering of book by id
    getOne = async (req, res) => { 
        try {
            const { bookId } = req.params; // Get the book ID from request parameters
            const book = await this.bookRepository.getOne(bookId); // Call the repository function to fetch the book
            if(!book)
            {
                res.status(404).send("book not found");
            }
            else{
                res.status(200).json(book); // Send success response with the book data
            }
            
        } catch (error) {
            res.status(500).json({error: "Failed to find book" }); // Handle and send errors if book not found
        }
    }

}
