const CartModel = require('../models/cart');

module.exports = {
    create,
    deleteCart

}

async function create(req, res) {
    try {
        console.log(req.body)
        //search for the carts by the logged in users
        //if the cart is exist, we add the product to it
        //if it doesn't , we have to create a cart, then, we add the product to it
        let cart = await CartModel.findOne({ userId: req.user._id })

        if (cart) {
            // checking to see if the product exists in the array
            const productIdx = cart.products.findIndex((p => p.productId.toString() === req.body.productId))
            // findIndex returns -1 if no match
            // if no product in cart, 
            if (productIdx === -1) {
                cart.products.push(req.body)
                await cart.save()
            } else {
                cart.products[productIdx].quantity += 1
                await cart.save()
            }

            res.json({ data: "item added to cart" })
        } else {
            // create new Cart with data from token, and form 
            const newCart = {
                username: req.user.username,
                userId: req.user._id,
                products: [{ productId: req.body.productId, quantity: 1 }]
            }
            cart = await CartModel.create(newCart)
            res.json({ data: "item added to Cart" })
        }



    } catch (err) {
        res.status(400).json({ err })
    }

}



async function deleteCart(req, res) {


}