import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"

type ProductType = {
    id: string,
    name: string
}

export default function Product(props) {
    const { isError, isSuccess, isLoading, data, error } = useQuery({
        queryKey: ["product"],
        queryFn: fetchProduct,
        staleTime: 60000
    })

    const product = data

    const {
        id,
        name
    } = product

    const queryClient = useQueryClient()

    // MUTATION (Add Product to Cart through API-POST)
    const cartMutation = useMutation<any>(
        (newProduct) => {
            console.log("Run: ", newProduct);
            return axios.post('http://localhost:3000/cart', newProduct)
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["products"])
                queryClient.refetchQueries("products", {force: true})
            }
        }
    )

    const onAddToCart = (event) => {
        event.preventDefault()
        cartMutation.mutate({ id })
    }

    if (isLoading)

    return (
        <div>
            id: {props.product.id}
            <br />
            name: {props.product.name}
        </div>
    )
}