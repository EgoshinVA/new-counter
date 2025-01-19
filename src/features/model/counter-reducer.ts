import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export const initialState = {
    counter: 0,
    startValue: 0,
    maxValue: 5,
    isValuesChanged: false,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCounter: (state, action: PayloadAction<number>) => {
            state.counter = state.counter < action.payload ? state.counter + 1 : state.counter
        },
        resetCounter: (state) => {
            state.counter = state.startValue
        },
        changeStartValue: (state, action: PayloadAction<number>) => {
            state.startValue = action.payload
        },
        changeMaxValue: (state, action: PayloadAction<number>) => {
            state.maxValue = action.payload
        },
        changeIsValuesChanged: (state, action: PayloadAction<boolean>) => {
            state.isValuesChanged = action.payload
        }
    }
})

export const {
    changeMaxValue,
    changeStartValue,
    changeIsValuesChanged,
    resetCounter,
    incrementCounter
} = counterSlice.actions;

export default counterSlice.reducer;