import {useState} from 'react'

import AddProductForm from "../../components/AddProductForm/AddProductForm";
import tokenService from '../../utils/tokenService';

export default function FeedPage(){
    const[products, setProducts] = useState([])   
    async function handleAddProduct(productFromTheForm){
        console.log(productFromTheForm)

        try{
            const response = await fetch(`/api/products`,{
                method: 'post',
                headers:{
                    Authorization: 'Bearer '+ tokenService.getToken()
                },
                body: productFromTheForm
            })
            
            const data= await response.json()
            console.log(data, 'the data from the sever')
            setProducts([data.product, ...products  ])

        }

        

        catch(err){
            console.log(err)
        

        }
    } 
    return(
        
            <AddProductForm handleAddProduct={handleAddProduct}/>
        
    )
}

