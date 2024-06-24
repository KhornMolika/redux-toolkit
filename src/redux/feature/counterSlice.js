import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    value: 0
}
// console.log("Initailize Value", initialstate.value)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// export action
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const selectValue = state => state.counter.value;

// export reducer
export default counterSlice.reducer;
