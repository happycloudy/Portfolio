import React from 'react';
import {HeaderLinksWrap} from "../HeaderLinksWrap/HeaderLinksWrap";
import HeaderLink from "../HeaderLink/HeaderLink";

const HeaderLinks = () => {
    return (
        <HeaderLinksWrap>
            <HeaderLink link={'#home'}>
                Главная
            </HeaderLink>
            <HeaderLink link={'#skills'}>
                Навыки
            </HeaderLink>
            <HeaderLink link={'#links'}>
                Свяжись со мной
            </HeaderLink>
        </HeaderLinksWrap>
    );
};

export default HeaderLinks;