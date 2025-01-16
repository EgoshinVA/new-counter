import React, {ReactNode} from 'react';

type Props = {
    children: ReactNode;
    callback: () => void;
}

export const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={props.callback}>{props.children}</button>
    )
}