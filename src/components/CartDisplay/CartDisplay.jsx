import { useState, useEffect } from "react";
import { Card, CardGroup} from 'semantic-ui-react'
import Item from '../../components/Item/Item'




export default function CartDisplay({cartItems}){
    return(

        <div>
           
                {cartItems.map((cartItem)=>(
                     <CardGroup itemsPerRow={1} stackable={true}>
                    <Item cartItem={cartItem} />
                    </CardGroup>

                ))}
           
            
        

        </div>
       
        
    )
}