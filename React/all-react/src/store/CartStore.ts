import { create } from "zustand";

type Item = {
    id: string;
    name: string;
    price: number;
}

type CartStore = {
    availableItems: Item[];
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => {
    return {
        // state
        cart: [],
        availableItems: [{ id: 'aa2', name: 'test', price: 10 }],
        // dispatch
        addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
        removeFromCart: (id) =>
            set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }))
    }
})