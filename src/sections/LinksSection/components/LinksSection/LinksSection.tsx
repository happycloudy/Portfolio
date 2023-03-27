import React from 'react';
import {SectionContainer} from "../../../../modules/Containers";
import {LinksSectionWrap} from "../LinksSectionWrap/LinksSectionWrap";
import BottomCircle from "../BottomCircle/BottomCircle";
import Links from "../Links/Links";

export const LinksSection = () => {
    return (
        <SectionContainer>
            <LinksSectionWrap>
                <BottomCircle/>
                <Links/>
            </LinksSectionWrap>
        </SectionContainer>
    );
};