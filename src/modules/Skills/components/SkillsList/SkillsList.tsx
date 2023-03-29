import React from 'react';
import {SkillItem} from "../SkillItem/SkillItem";
import {SkillsListWrap} from "../SkillsListWrap/SkillsListWrap";
import {NormalText} from "../../../Texts";

interface IProps {
    currentPage: number
    itemsPerPage: number
    skills: string[]
}

const SkillsList = ({currentPage, skills, itemsPerPage}: IProps) => {
    return (
        <SkillsListWrap>
            {
                skills.slice(
                    currentPage === 0 ? currentPage : currentPage * itemsPerPage,
                    currentPage * itemsPerPage + itemsPerPage
                ).map(skill => (
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