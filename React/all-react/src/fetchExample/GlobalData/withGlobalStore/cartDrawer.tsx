import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { fetchCart } from "@/fetchExample/fetchers/products";
import Product from "./Product";

export function CartDrawer(props) {
    const { onClose } = props;

    const dispatch = useDispatch();

    const products = useAppSelector((state) => state.products)
    const cart = useAppSelector((state) => state.cart)

    const isRefetchCart = useAppSelector((state) => state.isRefetchCart)

    const fetchCartProducts = async () => {
        const cart = await fetchCart();
        dispatch(setCart(cart))
    }

    useEffect(() => {
        fetchCartProducts()
    }, [])

    useEffect(() => {
        if (isRefetchCart) fetchCartProducts()
    }, [isRefetchCart])

    const cartProducts = useMemo(
        () =>
            products &&
            products.filter((product) => cart?.some((c) => c.id === product.id))
    );

    if (cartQuery.isLoading) return <div>Loading...</div>

    return (
        <div
            id="drawer-example"
            tabIndex={-1}
            aria-labelledby="drawer-label">
            
        </div>
    )
}