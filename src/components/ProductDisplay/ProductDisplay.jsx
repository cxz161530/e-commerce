import { useState, useEffect } from 'react'

import ProductCard from "../ProductCard/ProductCard"
import tokenService from "../../utils/tokenService"
import { Card } from 'semantic-ui-react'


export default function ProductDisplay({products, addProduct}){

   
    return(
        <div>
            <Card.Group itemsPerRow={4}>
            {products.map((product)=>(
                <ProductCard product={product} addProduct={addProduct}/>
            
            ))}
            </Card.Group>
        </div>
    )
}