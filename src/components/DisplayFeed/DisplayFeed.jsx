import { useState, useEffect } from 'react'


import ProductCard from "../ProductCard/ProductCard"
import tokenService from "../../utils/tokenService"
import { Card } from 'semantic-ui-react'


export default function DisplayFeed({displayProduct}){
    console.log(displayProduct, 'from feed page')
    const cards = displayProduct.map((disPro) => {
        return <ProductCard key={disPro._id} disPro={disPro} />
    })
    return(
        <div>
          <Card.Group itemsPerRow={4}>
          {cards}
        </Card.Group>
        </div>
       
    )
}