// src/features/jobs/schema/job.schema.js
import mongoose from 'mongoose';

// Define the schema for the job
export const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Job title is mandatory
  },
  description: {
    type: String,
    required: true, // Job description is mandatory
  },
  company: {
    type: String,
    required: true, // Company name is mandatory
  },
  salary: {
    type: Number,
    required: true, // Job salary is mandatory
  },
  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the 'User' model for job applicants
  }],
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
