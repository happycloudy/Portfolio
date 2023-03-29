import React, {useMemo} from 'react';
import {ButtonWrap} from "../ButtonWrap/ButtonWrap";
import {Title} from "../../../../modules/Texts";
import {SkillsHeadingsType} from "../../../../modules/Skills/types/skillsHeadingsType";
import classNames from "classnames";

interface IProps {
    action: (type: any) => void
    skillType: SkillsHeadingsType
}

const Button = ({action, skillType}: IProps) => {
    const classes = useMemo(() => ({
        right: skillType === 'BACKEND',
        left: skillType !== 'BACKEND',
    }), [skillType])


    return (
        <ButtonWrap className={classNames(classes)} onClick={() => action(skillType)}>
            <Title>
                Навыки в {skillType}
            </Title>
        </ButtonWrap>
    );
};

export default Button;