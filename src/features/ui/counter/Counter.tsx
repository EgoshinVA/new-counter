import React, {useEffect} from 'react';
import {Button} from "../../../common/components/Button";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {selectCounter, selectIsValuesChanged, selectMaxValue, selectStartValue} from "../../model/counter-selector";
import {changeStartValue, incrementCounter, resetCounter} from "../../model/counter-reducer";

export const Counter = () => {
    const counter = useAppSelector(selectCounter)
    const startValue = useAppSelector(selectStartValue)
    const maxValue = useAppSelector(selectMaxValue)
    const isValueChanged = useAppSelector(selectIsValuesChanged)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(changeStartValue(startValue))
    }, [])

    return (
        <div className="counter">
            {isValueChanged ? 'Confirm your changes' : <h2>{counter}</h2>}
            <div className="buttonsBlock">
                <Button disabled={counter === maxValue} callback={() => dispatch(incrementCounter(maxValue))}>inc</Button>
                <Button disabled={counter === startValue} callback={() => dispatch(resetCounter())}>reset</Button>
            </div>
        </div>
    )
}