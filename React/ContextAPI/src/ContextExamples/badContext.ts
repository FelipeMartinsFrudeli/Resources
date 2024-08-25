import { createContext } from "react";

const initialState = {
    products: [],
    cart: []
}

export const BadAppContext = createContext<any>(initialState);