import { useContextSelector } from "use-context-selector";
import { GoodAppContext } from "../ContextExamples/GoodContext";

export function Product(props) {
    // BAD
    // const { setCart } = useContext(BadAppContext);

    // GOOD
    const setCart = useContextSelector(GoodAppContext, (state) => state.setCart);

    const { product } = props;
    const { id, title, description, category, price, tags } = product;

    return (
        <div>
            title: {title}
        </div>
    )
}