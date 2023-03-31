import React, {useEffect, useMemo, useState} from 'react';
import {SkillItem} from "../SkillItem/SkillItem";
import {SkillsListWrap} from "../SkillsListWrap/SkillsListWrap";
import {NormalText} from "../../../Texts";
import classNames from "classnames";

interface IProps {
    currentPage: number
    itemsPerPage: number
    skills: string[]
}

const SkillsList = ({currentPage, skills, itemsPerPage}: IProps) => {
    const [prevPage, setPrevPage] = useState(currentPage)
    const classes = useMemo(() => ({
        animationLeft: prevPage - currentPage > 0,
        animationRight: prevPage - currentPage < 0,
    }), [currentPage])

    useEffect(() => {
        setPrevPage(currentPage)
    }, [currentPage])

    return (
        <SkillsListWrap className={classNames(classes)}>
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