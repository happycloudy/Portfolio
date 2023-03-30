import React from 'react';
import BigCircle from "../BigCircle/BigCircle";
import Text from "../Text/Text";
import SmallCircle from "../SmallCircle/SmallCircle";
import {Splash} from "../../../../modules/Figures";
import {SectionContainer} from "../../../../modules/Containers";
import {HomeSectionContainer} from "../HomeSectionContainer/HomeSectionContainer";

export const HomeSection = () => {
    return (
        <SectionContainer
            id={'home'}
        >
            <HomeSectionContainer>
                <BigCircle/>
                <SmallCircle/>
                <Splash/>
                <Text/>
            </HomeSectionContainer>
        </SectionContainer>
    );
};