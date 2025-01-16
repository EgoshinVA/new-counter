import React from 'react';
import {Input} from "../../../common/components/Input";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {selectMaxValue, selectStartValue} from "../../model/counter-selector";
import {
    changeIsValuesChangedAC,
    changeMaxValueAC,
    changeStartValueAC,
    setCounterStartValueAC
} from "../../model/counter-reducer";
import {Button} from "../../../common/components/Button";

export const Params = () => {
    const startValue = useAppSelector(selectStartValue)
    const maxValue = useAppSelector(selectMaxValue)
    const dispatch = useAppDispatch();

    const setValue = () => {
        dispatch(changeIsValuesChangedAC(false))
        dispatch(setCounterStartValueAC())
    }

    const changeMaxValue = (value: number) => {
        dispatch(changeMaxValueAC(value))
        dispatch(changeIsValuesChangedAC(true))
    }

    const changeStartValue = (value: number) => {
        dispatch(changeStartValueAC(value))
        dispatch(changeIsValuesChangedAC(true))
    }

    return (
        <div className="params">
            <p>Max value:</p>
            <Input value={maxValue} onChange={(value: number) => changeMaxValue(value)}/>
            <p>Start value:</p>
            <Input value={startValue} onChange={(value: number) => changeStartValue(value)}/>
            <Button callback={setValue}>Set</Button>
        </div>
    )
}