import React from 'react';
import {ArrowBase} from "../ArrowBase/ArrowBase";

interface IProps {
    onClick: () => void
    left?: boolean
}

export const Arrow = ({onClick, left}: IProps) => {
    return (
        <ArrowBase left={left} onClick={onClick}/>
    );
};