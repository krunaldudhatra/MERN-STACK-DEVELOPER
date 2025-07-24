// Please don't change the pre-written code
// Import the necessary modules here
import { logger } from '../middlewares/logger.middleware.js';
export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 
    "Oops! Something went wrong... Please try again later!" : 
    err.message;

  // Log the error details using the Winston logger
  logger.error({
    level: 'error',
    timestamp: new Date().toString(),
    'request URL': req.originalUrl,
    'error message': err.message
  });

  // Send the error response
  res.status(statusCode).json({
    success: false,
    error: message
  });
};
