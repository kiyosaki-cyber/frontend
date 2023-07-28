import { createSlice } from '@reduxjs/toolkit'
const initialState ={
    count: 10000
}
export const setSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state, action) => {
            state.count += action.payload 
        }
    } 
})
export default setSlice.reducer;
export const {increment } = setSlice.actions;