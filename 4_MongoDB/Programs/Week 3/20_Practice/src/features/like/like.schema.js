import mongoose from 'mongoose';

export const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the User collection
    ref: 'User',  // Specifies the referenced model (User)
    required: true,  // This field is mandatory
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the liked item (Job or User)
    required: true,  // This field is mandatory
  },
  on_model: {
    type: String,  // Specifies whether the like is for a 'User' or a 'Job'
    enum: ['User', 'Job'],  // Ensures that the 'on_model' is either 'User' or 'Job'
    required: true,  // This field is mandatory
  },
}, { timestamps: true });  // Adding timestamps to record when a like is created

// Create a Mongoose model from the schema
export const Like = mongoose.model('Like', likeSchema);
