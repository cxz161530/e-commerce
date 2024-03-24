import { useState, useEffect } from 'react'
import tokenService from "../../utils/tokenService"
import { Card } from 'semantic-ui-react'
import CartDisplay from '../../components/CartDisplay/CartDisplay'
import Header from "../../components/Header/Header"
import Checkout from "../../components/Checkout/Checkout"
import './Cart.css'


export default function Cart({loggedUser, handleLogout, cartItems, setCartItems}){
    console.log(cartItems)
    
    //here we set all the products in the cartItems state
    //cartItems means an array of items in one cart
    //const [cartItems, setCartItems] = useState([]);
    const total = cartItems.reduce((acc, item)=>{
        const price = Number(item.productId.price) * item.quantity
        return acc + price

    },0)

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
        

        } catch (err){
            console.log(err);
        }
    }

    async function removeItem(productId){
        try {
            const response = await fetch(`/api/carts/${productId}`,{
                method: 'DELETE',
                headers: {
                    // convention for sending jwts in a fetch request
                    Authorization: "Bearer " + tokenService.getToken(),
                    // We send the token, so the server knows who is making the
                    // request
                  } 
            })

            const data = await response.json()
            console.log(data, 'response from cancel item')
            getCart();

        } catch(err){
            console.log(err)
        }


    }

    async function addProduct(productId){
        try {
            const response = await fetch('/api/carts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  
                  Authorization: "Bearer " + tokenService.getToken()
                },
                body: JSON.stringify({productId: productId})
              })
              
              const data = await response.json()
              getCart()
              
              console.log(data)

        } catch (err){
            console.log(err)
        }
        


    }

    useEffect(() =>{
        getCart();
    }, []);
    return (
        <div className='cart-container'>
            <Header loggedUser={loggedUser} handleLogout={handleLogout} itemCount={cartItems.length}/>
            <div style={{maxWidth: "800px"}}>

            <CartDisplay cartItems={cartItems} removeItem={removeItem} addProduct={addProduct}/>
            <Checkout total={total} />
            </div>
            
            
        </div>
        
    )
}

