// 1. Import express
import express from 'express';
import bodyParser from 'body-parser';
import productRouter from './src/features/product/product.routes.js';
// 2. Create Server
const server = express();

server.use(bodyParser.json());
//It parses incoming request bodies that contain JSON payloads. If the Content-Type of the request is application/json, this middleware will parse the JSON data and make it available in req.body.
//urlencoded : It is used to parse incoming requests with URL-encoded payloads. Forms submitted via application/x-www-form-urlencoded (the default content type for HTML form submissions) will be parsed and made available in req.body.
// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api/products", productRouter);

// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});

// 4. Specify port.
server.listen(3200,()=>{
    console.log("Server is running at 3200");
});

