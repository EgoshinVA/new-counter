import React, {ReactNode} from 'react';

type Props = {
    children: ReactNode;
    callback: () => void;
    disabled?: boolean;
}

export const Button: React.FC<Props> = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.callback}>{props.children}</button>
    )
}