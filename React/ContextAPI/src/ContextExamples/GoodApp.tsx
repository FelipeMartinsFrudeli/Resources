import React, { useState } from "react";
import { GoodAppContext } from "./GoodContext";
import { Cart } from "../components/Cart";
import { ProductsList } from "../components/ProductsList";

type Props = {
    children: React.ReactNode
}

function StateProvider({ children }: Props) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    return (
        <GoodAppContext.Provider value={{ products, setProducts, cart, setCart }}>
            { children }
        </GoodAppContext.Provider>
    )
}

function GoodApp() {
    return (
        <StateProvider>
            <Cart />
            <div className="flex min-w-full justify-center items-center">
                <ProductsList />
            </div>
        </StateProvider>
    )
}

export default GoodApp;