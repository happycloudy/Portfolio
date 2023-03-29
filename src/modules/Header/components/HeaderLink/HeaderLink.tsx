import React from 'react';
import {HeaderLinkWrap} from "../HeaderLinkWrap/HeaderLinkWrap";
import {Link} from "react-scroll";

interface IProps {
    children: string
    link: string
}

const HeaderLink = ({children, link}: IProps) => {
    return (
        <Link to={link}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}>
            <HeaderLinkWrap>
                {children}
            </HeaderLinkWrap>
        </Link>
    );
};

export default HeaderLink;