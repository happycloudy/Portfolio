import React from 'react';
import {HomeSectionWrap} from "../HomeSectionWrap/HomeSectionWrap";
import BigCircle from "../BigCircle/BigCircle";
import Text from "../Text/Text";
import SmallCircle from "../SmallCircle/SmallCircle";
import Splash from "../../../../modules/Figures/components/Splash/Splash";

const HomeSection = () => {
    return (
        <HomeSectionWrap>
            <BigCircle/>
            <SmallCircle/>
            <Splash/>
            <Text/>
        </HomeSectionWrap>
    );
};

export default HomeSection;