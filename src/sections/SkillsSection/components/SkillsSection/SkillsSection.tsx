import React, {useMemo, useState} from 'react';
import {SectionContainer} from "../../../../modules/Containers";
import {SkillsSectionWrap} from "../SkillsSectionWrap/SkillsSectionWrap";
import Button from "../Button/Button";
import {Skills} from "../../../../modules/Skills";
import BottomCircle from "../BottomCircle/BottomCircle";
import {SkillsHeadingsType} from "../../../../modules/Skills/types/skillsHeadingsType";
import {skills} from "../../../../modules/Skills/constants/skills";


export const SkillsSection = () => {
    const [skillsType, setSkillsType] = useState<SkillsHeadingsType>('FRONTEND')

    const skillTypesIndex = useMemo(
        () => skills.reduce((prev, curr, index) => curr.name === skillsType ? index : prev, -1),
        [skillsType]
    )

    const nextSkillType = useMemo(
        () => skills.at(skillTypesIndex + 1 < skills.length ? skillTypesIndex + 1 : 0)!.name || skills[0].name,
        [skillTypesIndex]
    )

    const categories = useMemo(() => skills.at(skillTypesIndex)!.categories, [skillTypesIndex])

    const handleSkillsType = (type: SkillsHeadingsType) => setSkillsType(type)

    return (
        <SectionContainer>
            <SkillsSectionWrap>
                <Skills type={skillsType} categories={categories} initialCategory={categories[0].name}/>
                <Button action={handleSkillsType} skillType={nextSkillType}/>
                <BottomCircle/>
            </SkillsSectionWrap>
        </SectionContainer>
    );
};