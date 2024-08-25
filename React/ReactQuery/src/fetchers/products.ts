import axios from 'axios';

type Product = {
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
    const products: Product[] = response.data?.products

    return products
}

export const createProduct = async (product: Product) => {

}