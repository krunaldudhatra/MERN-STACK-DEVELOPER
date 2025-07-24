// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";

export const logger = winston.createLogger({
  // Write your code here
  level: 'error',  // Set the log level
  format: winston.format.combine(
    winston.format.timestamp(),  // Add a timestamp to the logs
    winston.format.json()  // Format the logs as JSON
  ),
  transports: [
    // Write errors to a file named 'error.log'
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
  ],
});
