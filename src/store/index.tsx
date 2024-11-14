import { configureStore } from "@reduxjs/toolkit";
import {
    productSlice
} from './feature'
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        product: productSlice
    }
})
export type ProductDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;