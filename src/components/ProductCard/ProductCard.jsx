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
            <CardContent extra style={{marginLeft: "41px"}}>
            <Button class="ui button" color="green" onClick={handleClick} >Add Cart</Button>
            </CardContent>
        </Card>

    )
}