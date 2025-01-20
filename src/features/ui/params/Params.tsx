import React, {useEffect} from 'react';
import {Input} from "../../../common/components/Input";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {selectMaxValue, selectStartValue} from "../../model/counter-selector";
import {
    changeIsValuesChanged,
    changeMaxValue,
    changeStartValue,
    resetCounter, SetToLsTC,
} from "../../model/counter-reducer";
import {Button} from "../../../common/components/Button";

export const Params = () => {
    const startValue = useAppSelector(selectStartValue)
    const maxValue = useAppSelector(selectMaxValue)
    const dispatch = useAppDispatch();

    const setValue = () => {
        if (!getError()) {
            dispatch(changeIsValuesChanged(false))
            dispatch(resetCounter())
            dispatch(SetToLsTC())
        }
    }

    const changeMaxValueHandler = (value: number) => {
        dispatch(changeMaxValue(value))
        dispatch(changeIsValuesChanged(true))
    }

    const changeStartValueHandler = (value: number) => {
        dispatch(changeStartValue(value))
        dispatch(changeIsValuesChanged(true))
    }

    const getError = () => {
        if (startValue >= maxValue) return true
        return startValue < 0;
    }

    return (
        <div className="params">
            <p>Max value:</p>
            <Input error={getError()} value={maxValue} onChange={(value: number) => changeMaxValueHandler(value)}/>
            <p>Start value:</p>
            <Input error={getError()} value={startValue} onChange={(value: number) => changeStartValueHandler(value)}/>
            <Button disabled={getError()} callback={setValue}>Set</Button>
        </div>
    )
}