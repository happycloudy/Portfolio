import React from 'react';
import {SkillItem} from "../SkillItem/SkillItem";
import {SkillsListWrap} from "../SkillsListWrap/SkillsListWrap";
import {NormalText} from "../../../Texts";

interface IProps {
    skills: string[]
}

const SkillsList = ({skills}: IProps) => {
    return (
        <SkillsListWrap>
            {
                skills.map(skill => (
                    <SkillItem key={skill}>
                        <NormalText small>
                            {skill}
                        </NormalText>
                    </SkillItem>
                ))
            }
        </SkillsListWrap>
    )
};

export default SkillsList;