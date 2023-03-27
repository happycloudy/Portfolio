import React from 'react';
import {SectionContainer} from "../../../../modules/Containers";
import {SkillsSectionWrap} from "../SkillsSectionWrap/SkillsSectionWrap";
import Button from "../Button/Button";
import {Skills} from "../../../../modules/Skills";

export const SkillsSection = () => {
    return (
        <SectionContainer>
            <SkillsSectionWrap>
                <Skills/>
                <Button/>
            </SkillsSectionWrap>
        </SectionContainer>
    );
};