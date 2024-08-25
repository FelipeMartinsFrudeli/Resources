import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/fetchExample/fetchers/products";
import { Product } from './Product';

export function WithReactQuery() {
    console.log("render")

    const { isError, isSuccess, isLoading, data, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 60000
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    return (
        <div>
            {data &&
                data.map((product) => <Product key={product.id} product={product} />)}
        </div>
    )
}