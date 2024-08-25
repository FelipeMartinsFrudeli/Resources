import axios from 'axios';

export type Product = {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    tags: string[];
}

export const fetchProducts = async () => {
    console.log("fetching products...");
    
    const response = await axios.get("https://dummyjson.com/products")
    const data = response.data
    if (!response.data) throw new Error("Error fetching data")
    
    const products: Product[] = data.products
    return products
}

export const createProduct = async (product: Product) => {

}