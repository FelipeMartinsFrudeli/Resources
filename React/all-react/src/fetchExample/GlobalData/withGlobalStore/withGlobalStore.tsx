// Redux

import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";


export function WithUseEffect() {
    const setProducts = useAppState((state) => state.setProducts)

    const fetchProducts = async () => {
        console.log('starting fetching');
        const response = await axios.get("https://dummyjson.com/products")
        const products = response.data.products

        console.log(products);
        if (products) dispatch(setProducts(products))
    }

    useEffect(() => {
        console.log("component mounted");
        fetchProducts()
    }, [])

    return (
        <div>
            {setProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}