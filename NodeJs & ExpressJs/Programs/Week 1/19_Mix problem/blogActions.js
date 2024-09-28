// Do not change the pre-written code.
// Make the necessary imports here.

import fs from 'fs';
export const writeBlog = (filePath, name) => {
// Write your code here.
fs.appendFileSync(filePath,name);
}

export const publishBlog = (filePath) => {
// Write your code here.
const data = fs.readFileSync(filePath);
return data.toString();
}