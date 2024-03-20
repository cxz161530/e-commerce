import { useState, useEffect } from 'react'
import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";
import tokenService from '../../utils/tokenService';
import SideBar from '../../components/SideBar/SideBar';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';



export default function Product() {

    return (
        <Grid >
            <Grid.Row>
                <Grid.Column>
                    <Header />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={4}>
                    <SideBar />
                </Grid.Column>

                <Grid.Column width={8}>
                    <ProductDisplay  />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}