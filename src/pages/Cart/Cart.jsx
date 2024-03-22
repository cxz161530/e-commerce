import { useState, useEffect } from 'react'

import tokenService from "../../utils/tokenService"
import { Card } from 'semantic-ui-react'
import CartDisplay from '../../components/CartDisplay/CartDisplay'
import Header from "../../components/Header/Header"

export default function Cart(){
    
    //here we set all the products in the cartItems state
    //cartItems means an array of items
    const [cartItems, setCartItems] = useState([]);

    //C(R)UD
    async function getCart(){
        try {
            //this is going to express to get the Cart info
            //so, we can use userid to search
            const response = await fetch("/api/carts", {
                method: "GET",
                headers: {
                    // convention for sending jwts in a fetch request
                    Authorization: "Bearer " + tokenService.getToken(),
                    // We send the token, so the server knows who is making the
                    // request
                  },
            });

            const data = await response.json()
            console.log(data, "data from Cart UserId")
            setCartItems(data.cart.products);
            console.log(carts)

        } catch (err){
            console.log(err);
        }
    }

    useEffect(() =>{
        getCart();
    }, []);
    return (
        <div>
            <Header />
            <CartDisplay cartItems={cartItems}/>
        </div>
        
    )
}