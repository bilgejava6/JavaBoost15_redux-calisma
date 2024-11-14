/**
 * 1- state
 * 2- fetch
 * 3- slice
 */

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../models/IProduct";

// step - 1 
interface IProductState{
    productList: IProduct[],
    isProductListLoading: boolean,
    sepetListesi: IProduct[]
}
const initialProductState: IProductState = {
    productList: [], // ürün listesini temsil eder
    isProductListLoading: false, // ürün listesi yükleniyor mu?
    sepetListesi: []
}
// step - 2
export const fetchGetAllProducts = createAsyncThunk(
    'product/fetchGetAllProducts',
    async () => {
       return await fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>data);
    }
);
// step - 3
const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    // state içerisindeki değerleri değiştirmek için kullanılan methodlar yazıyoruz.
    reducers: {
        addSepetList(state, action: PayloadAction<IProduct>){
            const list: IProduct[] = state.sepetListesi;
            list.push(action.payload);
            state.sepetListesi = list;
        }
    },
    extraReducers: (build)=>{
        // fetch işlemlerinin takibi ve sonuca göre işlemleri yapıyoruz.
        build.addCase(fetchGetAllProducts.pending,(state)=>{
            // fetch tetiklendiğinde devam ediyor olarak işaretle
            state.isProductListLoading = true; 
        });
        // fetch işlemi bittiğinde yapılacaklar.
        build.addCase(fetchGetAllProducts.fulfilled,(state,action)=>{
            state.isProductListLoading = false;
            state.productList = action.payload.products;
        });
    }
})
export const {
    addSepetList
} = productSlice.actions;
export default productSlice.reducer;