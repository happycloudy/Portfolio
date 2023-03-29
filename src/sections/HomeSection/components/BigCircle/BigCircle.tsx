import React from 'react';
import {BigCircleWrap} from "../BigCircleWrap/BigCircleWrap";
import {Circle} from "../../../../modules/Figures";

const BigCircle = () => {
    return (
        <BigCircleWrap>
            <Circle size={'big'} bg={'linear-gradient(225deg, #FFC0CB 1.56%, #8E44AD 59.37%)'} animationDelay={'0'}/>
        </BigCircleWrap>
    );
};

export default BigCircle;