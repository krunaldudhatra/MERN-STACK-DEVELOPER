import ProductModel from "../models/product.model.js";
const productModel = new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {
    let products = productModel.fetchProducts();
    res.render("product", { products });
  };
}