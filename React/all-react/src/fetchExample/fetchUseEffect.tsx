import { useEffect, useState } from "react";
import axios from 'axios'

type ProductType = {
    id: string,
    name: string
}

function Product(props: { product: ProductType }) {
    return (
        <div>
            id: {props.product.id}
            <br />
            name: {props.product.name}
        </div>
    )
}

export function WithUseEffect() {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchProducts = async () => {
        try {
            setLoading(true);

            console.log('Started fetching');
            const response = await axios.get("http://localhost:3000/products")
            const products = response.data;

            console.log(products)
            if (products) setProducts(products)
        } catch (err: any) {
            setError(err)
        }

        setLoading(false)
    }

    useEffect(() => {
        console.log("Component mounted");
        fetchProducts();
    }, [])

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
            {products.map((product: ProductType) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}