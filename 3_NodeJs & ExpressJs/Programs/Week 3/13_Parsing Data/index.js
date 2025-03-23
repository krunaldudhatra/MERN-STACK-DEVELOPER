// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import {renderBlogs,renderBlogForm,addBlog} from "./src/controllers/blog.controller.js"

const app = express();
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here
app.get("/createblog",renderBlogs);
app.get("/",renderBlogForm);
app.post('/addblog',addBlog);

export default app;
