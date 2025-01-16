import {applyMiddleware, combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import {thunk, ThunkDispatch} from "redux-thunk";
import {useDispatch, useSelector} from "react-redux";
import {ActionTypes, counterReducer} from "../features/model/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, ActionTypes>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()