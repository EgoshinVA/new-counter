import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {useDispatch, useSelector} from "react-redux";
import counterReducer, {initialState} from "../features/model/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

const preloadedState = {
    counter: initialState,
}

const stateFromLocalStorage = localStorage.getItem('state')
if (stateFromLocalStorage) {
    preloadedState.counter = JSON.parse(stateFromLocalStorage)
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
    preloadedState
});

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState().counter))
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()