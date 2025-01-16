import React, {useEffect} from 'react';
import {Button} from "../../../common/components/Button";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {selectCounter, selectIsValuesChanged, selectStartValue} from "../../model/counter-selector";
import {incrementCounterAC, resetCounterAC, setCounterStartValueAC} from "../../model/counter-reducer";

export const Counter = () => {
    const counter = useAppSelector(selectCounter)
    const startValue = useAppSelector(selectStartValue)
    const isValueChanged = useAppSelector(selectIsValuesChanged)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCounterStartValueAC())
    }, [])

    return (
        <div className="counter">
            <h2>{isValueChanged ? 'Confirm your changes' : counter}</h2>
            <div className="buttonsBlock">
                <Button callback={() => dispatch(incrementCounterAC())}>inc</Button>
                <Button callback={() => dispatch(resetCounterAC(startValue))}>reset</Button>
            </div>
        </div>
    )
}