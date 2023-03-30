import React from 'react';
import {HeaderLinkWrap} from "../HeaderLinkWrap/HeaderLinkWrap";
import {Link} from "react-scroll";
import {store} from "../../../../constants/store";

interface IProps {
    children: string
    link: string
}

const HeaderLink = ({children, link}: IProps) => {
    const handleSetActive = (to: string, element: HTMLElement) => {
        store.sectionId = to
    }

    return (
        <Link to={link}
              activeClass="active"
              spy={true}
              smooth={true}
              onSetActive={handleSetActive}
              duration={500}>
            <HeaderLinkWrap>
                {children}
            </HeaderLinkWrap>
        </Link>
    );
};

export default HeaderLink;