import React from 'react';
import {TextWrap} from "../TextWrap/TextWrap";
import {ColoredText, NormalText, Title} from "../../../../modules/Texts";
import Description from "./Description";

const Text = () => {
    return (
        <TextWrap>
            <NormalText>
                Привет!_
            </NormalText>
            <Title>
                Я <ColoredText>frontend-разработчик</ColoredText>
            </Title>
            <Description>
                Меня зовут Арион и я занимаюсь разработкой интерфейсов на React. Использую
                Typescript, Redux. Проектирую интерфейсы любой сложности и сейчас
                развиваюсь в архитектуре веб приложений
            </Description>
        </TextWrap>
    );
};

export default Text;