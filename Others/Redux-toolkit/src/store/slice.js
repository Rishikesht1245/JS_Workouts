import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count : 0
}
const counterSlice = createSlice({
    name : "common",
    initialState,
    reducers : {
        increment : (state, action) => {
            state.count += action.payload;
        },
        decrement : (state, action) => {
            state.count -= action.payload;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;