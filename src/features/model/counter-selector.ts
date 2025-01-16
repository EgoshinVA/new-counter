import {RootState} from "../../app/store";

export const selectCounter = (state: RootState) => state.counter.counter
export const selectStartValue = (state: RootState) => state.counter.startValue
export const selectMaxValue = (state: RootState) => state.counter.maxValue
export const selectIsValuesChanged = (state: RootState) => state.counter.isValuesChanged