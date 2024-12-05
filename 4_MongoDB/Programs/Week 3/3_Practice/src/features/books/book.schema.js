// Please don't change the pre-written code
// make the necessary imports for creating book schema named 'bookSchema'

// Start writing your code here
import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, required: true, ref : 'Author'},
    genre: {type:String , required: true, enum: [ 'Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy' ,'Other']},
    copies:{ type: Number, min : 1, required: true},
    availableCopies : {type: Number, min : 0, required: true}
})
export default bookSchema;
