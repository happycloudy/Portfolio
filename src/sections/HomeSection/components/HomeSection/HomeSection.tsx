import React from 'react';
import {HomeSectionWrap} from "../HomeSectionWrap/HomeSectionWrap";
import BigCircle from "../BigCircle/BigCircle";
import Text from "../Text/Text";
import SmallCircle from "../SmallCircle/SmallCircle";
import {Splash} from "../../../../modules/Figures";

export const HomeSection = () => {
    return (
        <HomeSectionWrap id={'home'}>
            <BigCircle/>
            <SmallCircle/>
            <Splash/>
            <Text/>
        </HomeSectionWrap>
    );
};