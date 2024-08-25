import { useEffect, useMemo } from 'react';
import { useContextSelector } from 'use-context-selector'
import { GoodAppContext } from '../ContextExamples/GoodContext';

export function CartDrawer(props) {
    const { onClose } = props;

    // BAD
    // const { cart } = useContext(BadAppContext)
    // const { products } = useContext(BadAppContext)

    // GOOD
    const cart = useContextSelector(GoodAppContext, (state) => state.cart);
    const products = useContextSelector(GoodAppContext, (state) => state.products);

    const cartProducts = useMemo(
        () => (
            products?.filter((products) => cart?.some((c) => c.id == products.id))
        ),
        [products]
    )

    useEffect(() => {
        console.info("Rendering CartDrawer");
    }, []);

    return (
        <div
            id="drawer-example"
            className="fixed top-0 z-40 h-screen p-4 overflow-y-auto bg-white"
            tabIndex={-1}
            aria-labelledby="drawer-label"
        >
            <ul>
                {cartProducts?.map(product => (
                    <li>
                        id: {product.id}
                        title: {product.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}