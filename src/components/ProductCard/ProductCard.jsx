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
export default function ProductCard({ product }) {
    console.log(product.amount)
    return (

        // <article>
        //     <div  >
        //         <img src={product.photoUrl}></img>
        //     </div>
        //     <header>
        //         <h3>{product.name}</h3>
        //         <p>{product.amount}</p>
        //         <p>{product.price}</p>
        //         <p>{product.category}</p>
        //     </header>

        // </article>

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
            <button class="ui button">Add Cart</button>
            </CardContent>
        </Card>

    )
}