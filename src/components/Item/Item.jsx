import React from 'react'
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Button
} from 'semantic-ui-react'

export default function Item({ cartItem }) {
    return (

        <CardGroup itemsPerRow={1}>
            <Card>
                <CardContent>
                    <Image
                        floated='right'
                        size='mini'
                        src={cartItem.productId.photoUrl} />
                    <CardHeader>{cartItem.productId.name}</CardHeader>
                    <CardMeta>{cartItem.productId.amount}</CardMeta>
                    <CardDescription>
                        ${cartItem.productId.price}
                    </CardDescription>
                </CardContent>
                <CardContent extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            -
                        </Button>
                        <Button basic color='green'>
                            +
                        </Button>
                    </div>
                </CardContent>
            </Card>

        </CardGroup >







    )
}