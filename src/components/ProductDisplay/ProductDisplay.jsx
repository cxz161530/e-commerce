import { useState, useEffect } from 'react'

import ProductCard from "../ProductCard/ProductCard"
import tokenService from "../../utils/tokenService"
import { Card } from 'semantic-ui-react'


export default function ProductDisplay({products}){

   
    return(
        <div>
            <h1>here are products showing page</h1>
            <Card.Group itemsPerRow={4}>
            {products.map((product)=>(
                <ProductCard product={product}/>
            
            ))}
            </Card.Group>
        </div>
    )
}