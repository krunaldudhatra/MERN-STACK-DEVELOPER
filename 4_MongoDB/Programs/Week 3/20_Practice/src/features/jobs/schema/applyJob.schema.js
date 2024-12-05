// src/features/jobs/schema/application.schema.js
import mongoose from 'mongoose';

// Define the schema for job applications
export const applyJobSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',  // Reference to the 'Job' collection
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the 'User' collection
    required: true
  }
});

const Application = mongoose.model('Application', applyJobSchema);

export default Application;
