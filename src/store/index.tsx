import { configureStore } from "@reduxjs/toolkit";
import {
    productSlice, anketSlice
} from './feature'
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        product: productSlice,
        anket: anketSlice
    }
})
export type ProductDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;