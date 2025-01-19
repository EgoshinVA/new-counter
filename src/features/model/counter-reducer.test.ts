// import {
//     changeIsValuesChangedAC,
//     changeMaxValueAC,
//     changeStartValueAC,
//     counterReducer,
//     incrementCounterAC,
//     InitialStateType,
//     setCounterStartValueAC
// } from "./counter-reducer";
//
export let initState: any //: InitialStateType
//
// beforeEach(() => {
//     return initState = {
//         counter: 0,
//         startValue: 0,
//         maxValue: 5,
//         isValuesChanged: false,
//     }
// })
//
// test('counter should correct increment', () => {
//     let endState = counterReducer(initState, incrementCounterAC(initState.maxValue))
//
//     expect(endState.counter).toBe(1)
//
//     endState = counterReducer(endState, incrementCounterAC(1))
//
//     expect(endState.counter).toBe(1)
// })
//
// test('counter should be equal start value', () => {
//     let endState = counterReducer(initState, incrementCounterAC(initState.maxValue))
//     endState = counterReducer(endState, setCounterStartValueAC())
//
//     expect(endState.counter).toBe(0)
// })
//
// test('start value should correct changed', () => {
//     let endState = counterReducer(initState, changeStartValueAC(2))
//
//     expect(endState.startValue).toBe(2)
// })
//
// test('max value should correct changed', () => {
//     let endState = counterReducer(initState, changeMaxValueAC(6))
//
//     expect(endState.maxValue).toBe(6)
// })
//
// test('field is value changed should correct change', () => {
//     let endState = counterReducer(initState, changeIsValuesChangedAC(true))
//
//     expect(endState.isValuesChanged).toBe(true)
// })