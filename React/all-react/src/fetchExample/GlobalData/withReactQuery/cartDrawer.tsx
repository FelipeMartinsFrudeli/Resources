import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { fetchCart, fetchProducts } from "@/fetchExample/fetchers/products";
import Product from "./Product";

export function CartDrawer(props) {
    const { onClose } = props;

    const cartQuery = useQuery({
        queryKey: ["cart"],
        queryFn: fetchCart,
        staleTime: 60000
    })

    const productsQuery = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 60000
    })
    
    const products = cartQuery.data
    const cart = productsQuery.data

    const cartProducts = useMemo(
        () =>
            products &&
            products.filter((product) => cart?.some((c) => c.id === product.id)),
        [products]);

    if (cartQuery.isLoading) return <div>Loading...</div>

    return (
        <div
            id="drawer-example"
            tabIndex={-1}
            aria-labelledby="drawer-label">
            
        </div>
    )
}