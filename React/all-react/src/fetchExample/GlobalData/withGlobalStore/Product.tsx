type ProductType = {
    id: string,
    name: string
}

export default function Product(props: { product: ProductType }) {
    return (
        <div>
            id: {props.product.id}
            <br />
            name: {props.product.name}
        </div>
    )
}