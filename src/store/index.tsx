import { configureStore } from "@reduxjs/toolkit";
import {
    productSlice
} from './feature'

const store = configureStore({
    reducer: {
        product: productSlice
    }
})

export default store;