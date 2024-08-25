import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchProducts } from "@/fetchExample/fetchers/products";

export function Info() {
    const { isError, isSuccess, isLoading, data, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 60000
    })

    const products = data

    const TotalNumberOfProducts = products?.length
    const numberOfProductsOver300 = useMemo(
        () => products?.filter((p) => p.price >= 300).length
    )

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <span>
                Total Products: {TotalNumberOfProducts}
            </span>
            <span>
                Number of Products over 300$: {numberOfProductsOver300}
            </span>
        </div>
    )
}