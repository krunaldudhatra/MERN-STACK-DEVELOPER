import mongoose from 'mongoose';
import { likeModel } from './like.model.js';  // Assuming the like model is in like.model.js

// Function to handle liking a job or a user profile
export const likeRepo = async (user_id, likeable_id, model) => {
  try {
    // Ensure that the 'model' parameter is either 'Job' or 'User'
    if (model !== 'Job' && model !== 'User') {
      throw new Error('Invalid model type');
    }

    // Check if the user has already liked the item (job or user profile)
    const existingLike = await likeModel.findOne({
      user: user_id,
      likeable: likeable_id,
      on_model: model
    });

    if (existingLike) {
      // If the like already exists, return null to indicate no action taken
      return null;
    }

    // If the like doesn't exist, create a new like document
    const newLike = new likeModel({
      user: user_id,
      likeable: likeable_id,
      on_model: model
    });

    // Save the new like to the database
    const savedLike = await newLike.save();
    return savedLike;  // Return the saved like document
  } catch (error) {
    throw new Error("Error liking the item: " + error.message);
  }
};

// Function to retrieve all likes for a specific job or user profile
export const getLikesRepo = async (id, on_model) => {
  try {
    // Ensure the 'on_model' is either 'Job' or 'User'
    if (on_model !== 'Job' && on_model !== 'User') {
      throw new Error('Invalid model type');
    }

    // Find all likes where the 'likeable' is the given ID and the 'on_model' matches
    const likes = await likeModel.find({
      likeable: id,
      on_model: on_model
    }).populate('user');  // Populate the 'user' field to get the full user details

    return likes;  // Return the list of likes for the specified item (job or user profile)
  } catch (error) {
    throw new Error("Error fetching likes: " + error.message);
  }
};
