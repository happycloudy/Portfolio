import React from 'react';
import {HeaderWrap} from "../HeaderWrap/HeaderWrap";
import {HeaderBackground} from "../HeaderBackground/HeaderBackground";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

export const Header = () => {
    return (
        <HeaderWrap>
            <HeaderLinks/>
            <HeaderBackground/>
        </HeaderWrap>
    );
};