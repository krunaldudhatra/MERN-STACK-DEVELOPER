import mongoose from 'mongoose';

export const reviewSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    target: {
        type: String,
        required: true,
        enum: ['Author', 'Book'],  // The target can either be an Author or a Book
    },
    targetId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'target',  // Reference the correct model based on the target field
    }
});
