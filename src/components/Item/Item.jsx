import React, { useState } from 'react'
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Button,
    ButtonGroup
} from 'semantic-ui-react'

export default function Item({ cartItem, removeItem, addProduct }) {
    console.log(cartItem, "here is cartItem")

    function handleOnClick() {
        removeItem(cartItem._id)
        console.log("Hello")
    }

    function handleOnClickAdd() {
        addProduct(cartItem._id)
        console.log("add is working")

    }

    return (
        <>
        <CardGroup itemsPerRow={1}>
            <Card>
                <CardContent>
                    <Image
                        floated='right'
                        size='mini'
                        src={cartItem.productId?.photoUrl} />
                    <CardHeader>{cartItem.productId.name}</CardHeader>
                    <CardMeta>{cartItem.productId.amount} x {cartItem.quantity}</CardMeta>
                    <CardDescription>
                        ${cartItem.productId.price}
                    </CardDescription>
                    <CardDescription >
                        Qty: {cartItem.quantity}
                    </CardDescription>
                    <CardDescription >
                        total price: {cartItem.quantity} * {cartItem.productId.price}
                    </CardDescription>
                </CardContent>
                <CardContent extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={handleOnClick}>
                            −
                        </Button>
                        <Button basic color='green' onClick={handleOnClickAdd}>
                            +
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </CardGroup >
        </>








    )
}