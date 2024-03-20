import { useState, useEffect } from 'react'

import ProductCard from "../ProductCard/ProductCard"
import tokenService from "../../utils/tokenService"


export default function ProductDisplay(){
    //const arr=[1, 2, 3]
    const [products, setProducts] = useState([]);

    async function getProductData(){
        try {

            const response = await fetch("/api/products", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),

                },
            });
            
            const data = await response.json();
            console.log(data);
            setProducts(data)

        } catch (err){
            console.log(err)
        }
    }

    useEffect(() =>{
        getProductData();
    }, []);

    return(
        <div>
            <h1>here are products showing page</h1>
            {products.map((product)=>(
                <ProductCard product={product}/>
            ))}
        </div>
    )
}