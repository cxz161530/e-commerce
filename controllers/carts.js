const CartModel = require('../models/cart');

module.exports = {
    create,
    removeItemFromCart,
    show

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

            return res.json({ data: "item added to cart" })
            console.log(data)
        } else {
            // create new Cart with data from token, and form 
            const newCart = {
                username: req.user.username,
                userId: req.user._id,
                products: [{ productId: req.body.productId, quantity: 1 }]
            }
            cart = await CartModel.create(newCart)
            return res.json({ data: "item added to Cart" })
        }



    } catch (err) {
        res.status(400).json({ err })
    }

}



async function removeItemFromCart(req, res) {
    try {
       // const item = await post.findOne({"cart._id": req.params.cartId, "userName": req.user._id})
       //find the cart by using the req.user._id
       const cart = await CartModel.findOne({userId: req.user._id})
       console.log(cart, "here is from cart info")
       res.json({msg:"Delete OKay"})

    } catch (err) {
        res.status(400).json({err})

    }


}

async function show(req, res){
    try {
      // find the cart by the userId property on the CartModel
      // req.user comes from the jwt token sent from the react side
      const cart = await CartModel.findOne({userId: req.user._id}).populate("products.productId").exec()
    
      res.json({cart})
    } catch(err){
      console.log(err);
      res.json({err});
    }
   }