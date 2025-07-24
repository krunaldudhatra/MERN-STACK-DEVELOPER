//-----------pre-written code starts----------
import BookRepository from "./book.repository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //book creation
  createBook = async (req, res) => {
    const { title, author, genre, copies, availableCopies } = req.body;
    try {
      const bookData = {
        title,
        author,
        genre,
        copies,
        availableCopies,
      };
      await this.bookRepository.createBook(bookData);
      res.status(201).json(bookData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to create a new book" });
    }
  };

  //filtering the book by id
  getOne = async (req, res) => {
    const { bookId } = req.params;
    console.log(bookId);

    try {
      const book = await this.bookRepository.getOne(bookId);
      if (!book) {
        res.status(404).send("book  not found.");
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };

  //---------------pre-written code ends-----------------

  // Complete the functions below:

  //filtering the books based on genre
  listBooksByGenre = async (req, res) => {
    const { genre } = req.params; 
  try {
    const books = await this.bookRepository.listBooksByGenre(genre); 
    if (!books) {
      res.status(404).json({ message: "No books found for the given genre" });
    } else {
      res.status(200).json(books);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to retrieve books by genre" });
  }
  };

  //increasing the count of available books
  updateBookAvailability = async (req, res) => {
    const { bookId } = req.params; 
  const { quantity } = req.body; 

  try {
    const updatedBook = await this.bookRepository.updateBookAvailability(bookId, quantity); 
    if(!updatedBook){
      return res.status(404).json("book not found");
    }
    res.status(200).json({ message: "Book availability updated", book: updatedBook });
  } catch (err) {
    console.log(err);
      res.status(500).json({ error: "Failed to update book availability" });
  }
  };

  //deletion of book
  deleteBook = async (req, res) => {
    const { bookId } = req.params; 

    try {
      const deletedBook = await this.bookRepository.deleteBookById(bookId); 
      if(!deletedBook){
        return res.status(404).json("book not found");
      }
      res.status(200).json({ message: "Book deleted successfully", book: deletedBook });
    } catch (err) {
      console.log(err);
      
        res.status(500).json({ error: "Failed to delete book" });
    }
  };
}
