import { createSlice } from "@reduxjs/toolkit"

const initialState = { products: [], cart: [] }

const productsSlide = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setCart: (state, action) => {
            state.cart = action.payload
        }
    }
})

export const { setProducts, setCart } = productsSlide.actions
export default productsSlide.reducer