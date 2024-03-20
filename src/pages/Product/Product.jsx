import { useState, useEffect } from 'react'
import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";
import tokenService from '../../utils/tokenService';
import SideBar from '../../components/SideBar/SideBar';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';



export default function Product() {
    const [products, setProducts] = useState([]);
    const [selectProducts, setSelectProducts] = useState([]);

    async function handleSelectProduct(selectedCategory){
        console.log(selectedCategory, "selected category from sidbar")

        try {
            const response = await fetch('api/products',{
                method: 'GET',
                body: selectedCategory,
                headers: {
                    Authorization: "Bearer " + tokenService.getToken()

                }

            })

            const data = await response.json();
            console.log(data)
            setProducts([data.Product, ...products])   
        } catch(err){
            console.log(err.message)
            console.log('CHECK YOU SERVER TERMINAL!!!')
        }
    }


    async function getProductData(){
        try {

            const response = await fetch("/api/products", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),

                },
            });
            
            const data = await response.json();
            console.log(data);
            setProducts(data)

        } catch (err){
            console.log(err)
        }
    }

    useEffect(() =>{
        getProductData();
    }, []);


    return (
        <Grid >
            <Grid.Row>
                <Grid.Column>
                    <Header />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={4}>
                    <SideBar handleSelectProduct={handleSelectProduct} />
                </Grid.Column>

                <Grid.Column width={8}>
                    <ProductDisplay products={products} />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}