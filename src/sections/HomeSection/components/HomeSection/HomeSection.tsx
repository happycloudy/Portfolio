import React from 'react';
import BigCircle from "../BigCircle/BigCircle";
import Text from "../Text/Text";
import SmallCircle from "../SmallCircle/SmallCircle";
import {Splash} from "../../../../modules/Figures";
import {SectionContainer} from "../../../../modules/Containers";

export const HomeSection = () => {
    return (
        <SectionContainer
            id={'home'}
            pl={'10.42vw'}
            pr={'10.42vw'}
            pt={'32vh'}
        >
            <BigCircle/>
            <SmallCircle/>
            <Splash/>
            <Text/>
        </SectionContainer>
    );
};