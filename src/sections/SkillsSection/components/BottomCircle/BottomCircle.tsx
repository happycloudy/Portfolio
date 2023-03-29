import React from 'react';
import {Circle} from "../../../../modules/Figures";
import {BottomCircleWrap} from "../BottomCircleWrap/BottomCircleWrap";

const BottomCircle = () => {
    return (
        <BottomCircleWrap>
            <Circle size={'big'} bg={'linear-gradient(225deg, #FFC0CB 1.56%, #8E44AD 59.37%)'}/>
        </BottomCircleWrap>
    );
};

export default BottomCircle;