import React from 'react';
import {Title} from "../../../Texts";
import {TitleWrap} from "../TitleWrap/TitleWrap";
import {SkillsWrap} from "../SkillsWrap/SkillsWrap";
import Categories from "../Categories/Categories";
import SkillsList from "../SkillsList/SkillsList";


export const Skills = () => {
    return (
        <SkillsWrap>
            <TitleWrap>
                <Title>
                    Навыки в FRONTEND
                </Title>
            </TitleWrap>
            <Categories/>
            <SkillsList skills={['CSS Modules', 'Styled components']}/>
        </SkillsWrap>
    );
};