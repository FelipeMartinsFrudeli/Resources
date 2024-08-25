import { useEffect, useState } from "react"
import { QueryClient, useQuery } from "@tanstack/react-query"
import axios from "axios"

import { fetchProducts } from "@/fetchExample/fetchers/products"

type ProductType = {
    id: string,
    name: string
}

function Product(props: { product: ProductType }) {
    return (
        <div>
            id: {props.product.id}
            <br />
            name: {props.product.name}
        </div>
    )
}

export function withReactQuery() {
    console.log("render");
    
    const { isError, isSuccess, isLoading, data, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 60000
    })
    
    useEffect(() => {
        console.log("Component mounted!");
    })

    if (isLoading) {
        console.log("loading...");
        return <div>Loading...</div>
    }

    if (isError) {
        console.log("Error: ", error);
        return <div>Error...</div>
    }

    return (
        <div>
            {data &&
                data.map((product: ProductType) => <Product key={product.id} product={product}/>)}
        </div>
    )
}