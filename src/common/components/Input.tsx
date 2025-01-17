import React from 'react';

type Props = {
    value: number
    onChange: (value: number) => void
    error?: boolean
}

export const Input: React.FC<Props> = (props) => {
    return (
        <input className={props.error ? 'inputError' : ''} type="number" value={props.value} onChange={(e) => props.onChange(Number(e.currentTarget.value))}/>
    )
}