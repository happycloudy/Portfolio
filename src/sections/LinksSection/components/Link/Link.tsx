import React from 'react';
import {Circle} from "../../../../modules/Figures";

interface IProps {
    icon: string
    href: string
}

const Link = ({icon, href}: IProps) => {
    return (
        <Circle size={'small'}
                bg={'linear-gradient(180deg, #8E44AD -7%, #FFC0CB 58.76%)'}
                noAnimation
                as={'a'}
                hover
                href={href}
        >
            <img src={icon} alt="link-icon"/>
        </Circle>
    );
};

export default Link;