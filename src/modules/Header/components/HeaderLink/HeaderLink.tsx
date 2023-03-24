import React from 'react';
import {HeaderLinkWrap} from "../HeaderLinkWrap/HeaderLinkWrap";

interface IProps {
    children: string
}

const HeaderLink = ({children}: IProps) => {
    return (
        <HeaderLinkWrap>
            {children}
        </HeaderLinkWrap>
    );
};

export default HeaderLink;