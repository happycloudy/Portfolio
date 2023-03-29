import React from 'react';
import {HeaderLinkWrap} from "../HeaderLinkWrap/HeaderLinkWrap";

interface IProps {
    children: string
    link: string
}

const HeaderLink = ({children, link}: IProps) => {
    return (
        <HeaderLinkWrap href={link}>
            {children}
        </HeaderLinkWrap>
    );
};

export default HeaderLink;