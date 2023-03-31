import React from 'react';
import {TextWrap} from "../TextWrap/TextWrap";
import {CustomText, NormalText, Title} from "../../../../modules/Texts";
import Description from "./Description";

const Text = () => {
    return (
        <TextWrap>
            <NormalText>
                Привет!_
            </NormalText>
            <Title>
                Я <CustomText>frontend-разработчик</CustomText>
            </Title>
            <Description>
                Меня зовут Арион и я занимаюсь разработкой интерфейсов на <CustomText>React</CustomText>.
                Использую <CustomText>Typescript, Redux</CustomText>. Проектирую интерфейсы любой сложности и сейчас
                развиваюсь в архитектуре веб приложений
            </Description>
        </TextWrap>
    );
};

export default Text;