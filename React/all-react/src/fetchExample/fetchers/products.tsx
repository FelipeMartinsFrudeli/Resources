import axios from "axios";

export const fetchProducts = async () => {
    console.log("fetching products...")
    const response = await axios.get("http://localhos:3000/products")
    const products = response.data

    console.log(products);
    return products
}

export const fetchCart = async () => {
    console.log("Fetching Cart");
    const response = await axios.get("http://localhost:3000/cart")
    const cart = response.data

    console.log(cart);
    return cart
}