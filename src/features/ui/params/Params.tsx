import React, {useEffect} from 'react';
import {Input} from "../../../common/components/Input";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {selectMaxValue, selectStartValue} from "../../model/counter-selector";
import {
    changeIsValuesChangedAC,
    changeMaxValueAC,
    changeStartValueAC,
    setCounterStartValueAC, setValuesFromLocalStorageTC, setValuesToLocalStorageTC
} from "../../model/counter-reducer";
import {Button} from "../../../common/components/Button";

export const Params = () => {
    const startValue = useAppSelector(selectStartValue)
    const maxValue = useAppSelector(selectMaxValue)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setValuesFromLocalStorageTC())
    }, []);

    const setValue = () => {
        if (!getError()) {
            dispatch(changeIsValuesChangedAC(false))
            dispatch(setCounterStartValueAC())
            dispatch(setValuesToLocalStorageTC())
        }
    }

    const changeMaxValue = (value: number) => {
        dispatch(changeMaxValueAC(value))
        dispatch(changeIsValuesChangedAC(true))
    }

    const changeStartValue = (value: number) => {
        dispatch(changeStartValueAC(value))
        dispatch(changeIsValuesChangedAC(true))
    }

    const getError = () => {
        if (startValue >= maxValue) return true
        return startValue < 0;
    }

    return (
        <div className="params">
            <p>Max value:</p>
            <Input error={getError()} value={maxValue} onChange={(value: number) => changeMaxValue(value)}/>
            <p>Start value:</p>
            <Input error={getError()} value={startValue} onChange={(value: number) => changeStartValue(value)}/>
            <Button disabled={getError()} callback={setValue}>Set</Button>
        </div>
    )
}