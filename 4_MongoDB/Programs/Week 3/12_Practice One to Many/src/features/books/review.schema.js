import mongoose from "mongoose";

export const reviewSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
}, { timestamps: true });

const reviewModel = mongoose.model('Review', reviewSchema);

export default reviewModel;
