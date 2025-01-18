import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export type InitialStateType = {
    counter: number
    startValue: number
    maxValue: number
    isValuesChanged: boolean
}

const initialState: InitialStateType = {
    counter: 0,
    startValue: 0,
    maxValue: 5,
    isValuesChanged: false,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "INCREMENT-COUNTER":
            return state.counter < action.maxValue ? {...state, counter: state.counter + 1} : state
        case "SET-COUNTER-START-VALUE":
            return {...state, counter: state.startValue}
        case "CHANGE-START-VALUE":
            return {...state, startValue: action.value}
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: action.value}
        case "CHANGE-IS-VALS-CHANGE":
            return {...state, isValuesChanged: action.isValuesChanged}
        case "SET-VALUES-FROM-LS":
            return action.state
        default:
            return state
    }
}

export const incrementCounterAC = (maxValue: number) => {
    return {type: 'INCREMENT-COUNTER', maxValue} as const
}

export const setCounterStartValueAC = () => {
    return {type: 'SET-COUNTER-START-VALUE'} as const
}

export const changeStartValueAC = (value: number) => {
    return {type: 'CHANGE-START-VALUE', value} as const
}

export const changeMaxValueAC = (value: number) => {
    return {type: 'CHANGE-MAX-VALUE', value} as const
}

export const changeIsValuesChangedAC = (isValuesChanged: boolean) => {
    return {type: 'CHANGE-IS-VALS-CHANGE', isValuesChanged} as const
}

export const setValuesFromLocalStorageAC = (state: InitialStateType) => {
    return {type: "SET-VALUES-FROM-LS", state} as const
}

export const setValuesToLocalStorageTC = () => (dispatch: Dispatch, getState: () => RootState) => {
    localStorage.setItem('state', JSON.stringify(getState().counter))
}

export const setValuesFromLocalStorageTC = () => (dispatch: Dispatch) => {
    const state = localStorage.getItem('state')
    if (state)
        dispatch(setValuesFromLocalStorageAC(JSON.parse(state)))
}

export type IncrementCounterActionType = ReturnType<typeof incrementCounterAC>
export type ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>
export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
export type ChangeIsValuesChangedActionType = ReturnType<typeof changeIsValuesChangedAC>
export type SetCounterStartValueActionType = ReturnType<typeof setCounterStartValueAC>
export type SetValuesFromLocalStorageActionType = ReturnType<typeof setValuesFromLocalStorageAC>

export type ActionTypes =
    IncrementCounterActionType
    | SetCounterStartValueActionType
    | ChangeStartValueActionType
    | ChangeMaxValueActionType
    | ChangeIsValuesChangedActionType
    | SetValuesFromLocalStorageActionType
