import React from 'react';
import {SmallCircleWrap} from "../SmallCircleWrap/SmallCircleWrap";
import {Circle} from "../../../../modules/Figures";

const SmallCircle = () => {
    return (
        <SmallCircleWrap>
            <Circle size={'medium'} color={'linear-gradient(44.8deg, #8E44AD 26.37%, #3498DB 97.62%)'}/>
        </SmallCircleWrap>
    );
};

export default SmallCircle;