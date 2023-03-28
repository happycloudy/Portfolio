import React from 'react';
import {Circle} from "../../../../modules/Figures";
import {BottomCircleWrap} from "../BottomCircleWrap/BottomCircleWrap";

const BottomCircle = () => {
    return (
        <BottomCircleWrap>
            <Circle size={'big'} color={'linear-gradient(225deg, #FFC0CB 1.56%, #8E44AD 59.37%)'} animationDelay={'0.5s'}/>
        </BottomCircleWrap>
    );
};

export default BottomCircle;