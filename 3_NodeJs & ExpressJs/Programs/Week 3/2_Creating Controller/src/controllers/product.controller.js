import path from 'path';

export default class ProductController{

    getProducts(req,res){
        console.log(path.resolve());
        // path.resolve() basically give current executing directory
        return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
        //Sends a specific file as the response for a request. It is typically used when you want to send a particular file in response to a particular route.
    }
}