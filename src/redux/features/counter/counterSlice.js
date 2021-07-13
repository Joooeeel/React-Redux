import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'sliceTest',
    initialState: {
        num: 0,
    },
    reducers: {
        increase: (state) => {
            state.num += 1
        },
        decrase: (state) => {
            state.num -= 1
        },
        increaseByNum: (state, action) => {
            console.log(action)
            state.num += action.payload
        },
    },
})

//Exportamos los reducers, que han creado un action por cada caso de reducer. 
export const { increase, decrase, increaseByNum } = counterSlice.actions;
export default counterSlice.reducer;
