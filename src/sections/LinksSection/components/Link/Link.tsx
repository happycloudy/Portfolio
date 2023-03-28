import React from 'react';
import {Circle} from "../../../../modules/Figures";

interface IProps {
    icon: string
}

const Link = ({icon}: IProps) => {
    return (
        <Circle size={'small'} color={'linear-gradient(180deg, #8E44AD -7%, #FFC0CB 58.76%)'} noAnimation>
            <img src={icon} alt="link-icon"/>
        </Circle>
    );
};

export default Link;