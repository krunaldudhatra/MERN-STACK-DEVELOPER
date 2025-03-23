import express from 'express'
import ProductController from './src/controllers/product.controller.js';
// const express = require('express');

const server = express();

// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));
// if you write use above get then controler won't execute static file execute
server.use(express.static('src/views'));
    // return res.send('Welcome to Inventory App');
    //Serves static files (like HTML, CSS, JavaScript, images, etc.) from a specified directory. It's used to serve many static assets without defining specific routes for each file.
server.listen(3400);
console.log('Server is listening on pert 3400');
// If you only use res.sendFile() to serve an HTML file, the HTML will be sent to the client, but any linked CSS (or other assets like images, JavaScript files) won't be automatically served unless you also serve them through express.static() or define routes to handle them.