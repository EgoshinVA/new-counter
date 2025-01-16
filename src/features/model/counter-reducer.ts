type InitialStateType = {
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
            return {...state, counter: state.counter + 1}
        case "SET-COUNTER-START-VALUE":
            return {...state, counter: state.startValue}
        case 'RESET-COUNTER':
            return {...state, counter: action.startValue}
        case "CHANGE-START-VALUE":
            return {...state, startValue: action.value}
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: action.value}
        case "CHANGE-IS-VALS-CHANGE":
            return {...state, isValuesChanged: action.isValuesChanged}
        default:
            return state
    }
}

export const incrementCounterAC = () => {
    return {type: 'INCREMENT-COUNTER'} as const
}

export const setCounterStartValueAC = () => {
    return {type: 'SET-COUNTER-START-VALUE'} as const
}

export const resetCounterAC = (startValue: number) => {
    return {type: 'RESET-COUNTER', startValue} as const
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

export type IncrementCounterActionType = ReturnType<typeof incrementCounterAC>
export type ResetCounterActionType = ReturnType<typeof resetCounterAC>
export type ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>
export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
export type ChangeIsValuesChangedActionType = ReturnType<typeof changeIsValuesChangedAC>
export type SetCounterStartValueActionType = ReturnType<typeof setCounterStartValueAC>

export type ActionTypes =
    IncrementCounterActionType
    | SetCounterStartValueActionType
    | ResetCounterActionType
    | ChangeStartValueActionType
    | ChangeMaxValueActionType
    | ChangeIsValuesChangedActionType
