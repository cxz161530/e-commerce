import React from 'react'
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Button
} from 'semantic-ui-react'
export default function ProductCard({ product, addProduct}) {
    console.log(product.amount)

    async function handleClick(){
        addProduct(product._id)

    }


    return (

        <Card>
            <Image src={product.photoUrl} wrapped ui={false} />
            <CardContent>
                <CardHeader>{product.name}</CardHeader>
                <CardMeta>{product.amount}</CardMeta>
                <CardDescription>
                    ${product.price}
                </CardDescription>
            </CardContent>
            <CardContent extra>
            <button class="ui button" onClick={handleClick} >Add Cart</button>
            </CardContent>
        </Card>

    )
}