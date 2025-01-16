import React from 'react';

type Props = {
    value: number
    onChange: (value: number) => void
}

export const Input: React.FC<Props> = (props) => {
    return (
        <input type="number" value={props.value} onChange={(e) => props.onChange(Number(e.currentTarget.value))}/>
    )
}