import mongoose from 'mongoose';
import { jobModel } from './job.model.js'; // Assuming the job model is in job.model.js
import { applyJobModel } from './application.model.js'; // Assuming application model is in application.model.js

// Function to create a new job post
export const createNewJob = async (job) => {
  try {
    const newJob = new jobModel(job);  // Create a new job using the provided job data
    const savedJob = await newJob.save();  // Save the job to the database
    return savedJob;
  } catch (error) {
    throw new Error("Error creating the job: " + error.message);
  }
};

// Function to apply for a job
export const applyJobRepo = async (jobId, userId) => {
  try {
    // Check if the user has already applied for this job
    const existingApplication = await applyJobModel.findOne({ jobId, userId });
    if (existingApplication) {
      return null;  // User has already applied for this job
    }

    // If not already applied, create a new application
    const newApplication = new applyJobModel({ jobId, userId });
    const savedApplication = await newApplication.save();
    return savedApplication;  // Return the saved application details
  } catch (error) {
    throw new Error("Error applying for the job: " + error.message);
  }
};

// Function to find a job by ID
export const findJobRepo = async (_id) => {
  try {
    // Find the job by its ID
    const job = await jobModel.findById(_id);
    return job;  // Return the job details if found
  } catch (error) {
    throw new Error("Job not found: " + error.message);
  }
};
