const express = require('express');

// Create a server.

const server = express();

// Handle default request.

server.get('/', (req, res,next) => {
  console.log('first middleware hit');
  next();
});

server.get('/', (req, res) => {
  res.send('Hello World! This is Express server');
});

// Assign port.
server.listen(3200, () => {
  console.log('Server is listening on 3200');
});