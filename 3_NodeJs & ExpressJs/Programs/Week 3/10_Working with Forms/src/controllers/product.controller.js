import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {
    getProducts(req, res) {
        let products = ProductModel.get();
        console.log(products);
        res.render('index', { products });
    }

    getAddForm(req,res){
        return res.render('new-product')
    }

    addnewProduct(req,res){
        // access data from form.
        console.log(req.body);
        let products = ProductModel.get();
        res.render('index', {products: products});
    }
}

