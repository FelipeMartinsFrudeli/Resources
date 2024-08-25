import { useEffect } from "react";
import { fetchProducts } from "../fetchers/products"
import { useContextSelector } from "use-context-selector";
import { GoodAppContext } from "../ContextExamples/GoodContext";
import { Product } from "./Product";

export function ProductsList() {

    // BAD
    // const { products, setProducts } = useContext(BadAppContext)

    // GOOD
    const products = useContextSelector(
        GoodAppContext,
        (state) => state.products
    )

    const setProducts = useContextSelector(
        GoodAppContext,
        (state) => state.setProducts
    )

    const getProducts = async () => {
        const products = await fetchProducts();
        setProducts(products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        console.info("Rendering ProductList")
    })

    return (
        <div className="flex flex-col w-full h-full p-6">
            <h1 className="font-bold mb-8">Products</h1>
            <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Timestamp: {Date.now()}
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-3 justify-center">
                {products?.map((product, idx) => (
                    <Product product={product} key={idx} />
                ))}
            </div>
        </div>
    )
}