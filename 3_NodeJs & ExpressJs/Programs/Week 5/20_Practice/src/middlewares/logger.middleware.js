// Please don't change the pre-written code
// Import the necessary modules here
import winston from 'winston';
// Write your code here
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'combined.log'}),
  ],
});

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  if (!req.url.includes("signin")) {
    const logData = {
      timestamp: new Date().toString(),
      reqUrl: req.url,
      reqBody: req.body
    };

    logger.info(logData); // Log as a structured object
  }
next();
};
export default loggerMiddleware;
