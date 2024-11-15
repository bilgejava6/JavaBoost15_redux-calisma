import { createSlice } from "@reduxjs/toolkit"
interface IAnkatState{
    selectCount: number,
    isLimit: boolean
}
const initialAnketState: IAnkatState = {
    selectCount: 0,
    isLimit: false
}
const anketSlice = createSlice({
    name: 'anket',
    initialState: initialAnketState,
    reducers: {
        addSelect(state){
            if(!state.isLimit) // eğer limit e ulaşmamış isen arttır
                state.selectCount = state.selectCount+1; // seçilen adet sayısını arttıracak
            state.isLimit = state.selectCount == 7; // seçilen adet 7 ye eşit ise limit doldu true olacak
        },
        removeSelect(state){
            state.selectCount = state.selectCount-1;
            state.isLimit = state.selectCount == 7;
        }
    }
})
export const {
 addSelect, removeSelect
} = anketSlice.actions;
export default anketSlice.reducer;