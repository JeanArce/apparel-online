import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/shop/shop.util";
import Directory from "../../components/directory/directory.component";

const Home = () => {

    useEffect(() => {
        const getProducts = async() => {
            const products = await fetchProducts();
        };
        getProducts();
    }, []);

    return (
        <Directory />
    )
};



export default Home;