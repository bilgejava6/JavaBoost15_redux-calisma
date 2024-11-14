/**
 * 1- state
 * 2- fetch
 * 3- slice
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// step - 1 
const initialProductState = {
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
    reducers: {},
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

export default productSlice.reducer;