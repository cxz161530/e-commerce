import { useState, useEffect } from 'react'
import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";
import tokenService from '../../utils/tokenService';
import SideBar from '../../components/SideBar/SideBar';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';


export default function Product({loggedUser, handleLogout, cartItems} ) {
    //products is an array of all products that we fetched from the sever
    const [products, setProducts] = useState([]);
    //selectedCategory is a string that gets filled when we click on a 
    //button in the side bar
    const [selectedCategory, setSelectedCategory] = useState("");
    console.log(products)
    //here filter the data(filtering the array by category)
    const selectedProducts = selectedCategory ? products.filter((p)=>{return p.category === selectedCategory}) : products
    //a constant will get redeclared everytime the component renders
    //if ther is a selectedCategory, we filter the products in state, 
    //so that we only display the products with that category
    //if ther is not a selected category, display all the products

    console.log(selectedProducts)

    async function handleSelectProduct(category){
        console.log(category, "selected category from sidbar")
        setSelectedCategory(category)
   
    }

    async function addProduct(productId){
        try {
            const response = await fetch('/api/carts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  
                  Authorization: "Bearer " + tokenService.getToken()
                },
                body: JSON.stringify({productId: productId})
              })
              
              const data = await response.json()
              
              console.log(data)

        } catch (err){
            console.log(err)
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
                    <Header loggedUser={loggedUser} handleLogout={handleLogout} itemCount={cartItems.length} />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={4}>
                    <SideBar handleSelectProduct={handleSelectProduct} />
                </Grid.Column>

                <Grid.Column width={8}>
                    <ProductDisplay products={selectedProducts} addProduct={addProduct} />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}