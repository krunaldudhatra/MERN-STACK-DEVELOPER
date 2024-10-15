// Import the necessary modules here.
const path = require('path');
module.exports.getAbsolutePath = (filePath) => {
// Write your code here
const ab = path.resolve(filePath);
return ab;
};
