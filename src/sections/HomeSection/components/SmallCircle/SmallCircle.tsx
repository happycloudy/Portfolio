import React from 'react';
import {SmallCircleWrap} from "../SmallCircleWrap/SmallCircleWrap";
import {Circle} from "../../../../modules/Figures";

const SmallCircle = () => {
    return (
        <SmallCircleWrap>
            <Circle size={'medium'} bg={'linear-gradient(44.8deg, #8E44AD 26.37%, #3498DB 97.62%)'} animationDelay={'0.5s'}/>
        </SmallCircleWrap>
    );
};

export default SmallCircle;