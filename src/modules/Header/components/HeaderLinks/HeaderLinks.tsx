import React from 'react';
import {HeaderLinksWrap} from "../HeaderLinksWrap/HeaderLinksWrap";
import HeaderLink from "../HeaderLink/HeaderLink";

const HeaderLinks = () => {
    return (
        <HeaderLinksWrap>
            <HeaderLink>
                Главная
            </HeaderLink>
            <HeaderLink>
                Навыки
            </HeaderLink>
            <HeaderLink>
                Свяжись со мной
            </HeaderLink>
        </HeaderLinksWrap>
    );
};

export default HeaderLinks;