import React from 'react';
import {ButtonWrap} from "../ButtonWrap/ButtonWrap";
import {Title} from "../../../../modules/Texts";
import {SkillsHeadingsType} from "../../../../modules/Skills/types/skillsHeadingsType";

interface IProps {
    action: (type: any) => void
    skillType: SkillsHeadingsType
}

const Button = ({action, skillType}: IProps) => {
    return (
        <ButtonWrap className={skillType === 'BACKEND' ? 'right': 'left'} onClick={() => action(skillType)}>
            <Title>
                Навыки в {skillType}
            </Title>
        </ButtonWrap>
    );
};

export default Button;