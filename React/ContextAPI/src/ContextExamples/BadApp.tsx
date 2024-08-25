import { useEffect, useState } from "react";
import { Product, fetchProducts } from "../fetchers/products";
import { BadAppContext } from "./badContext";
import { ProductsList } from "../components/productsList";
import { Cart } from "../components/Cart";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState([]);

    const getProducts = async () => {
        const products = await fetchProducts();
        setProducts(products)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <BadAppContext.Provider value={{ products, setProducts, cart, setCart }}>
            <Cart />
            <div className="flex min-w-full justify-center items-center">
                <ProductsList />
            </div>
        </BadAppContext.Provider>
    )
}