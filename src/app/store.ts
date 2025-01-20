import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import counterReducer from "../features/model/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState
const getFromLS = localStorage.getItem("state");
if (getFromLS) {
    preloadedState = JSON.parse(getFromLS);
}

export const store = configureStore({
    reducer: rootReducer,
    preloadedState
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()