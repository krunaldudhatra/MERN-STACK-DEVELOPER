import CartItemModel from "./cartItems.model.js";

export class CartItemsController {
    add(req, res) {
        const { productID, quantity } = req.query;
        const userID = req.userID;
        CartItemModel.add(productID, userID, quantity);
        res.status(201).send("Cart is updated");
    }

    get(req, res){
        const userID = req.userID;
        const items = CartItemModel.get(userID);
        return res.status(200).send(items);

    }
}