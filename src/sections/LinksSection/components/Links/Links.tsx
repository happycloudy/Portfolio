import React from 'react';
import {LinksContainer} from "../LinksContainer/LinksContainer";
import Link from "../Link/Link";
import VkIcon from "../../../../assets/vk.svg"
import MainIcon from "../../../../assets/mail.svg"
import TelegramIcon from "../../../../assets/telegram.svg"
import LinkedInIcon from "../../../../assets/linkedin.svg"

const Links = () => {
    return (
        <LinksContainer>
            <Link icon={VkIcon}/>
            <Link icon={MainIcon}/>
            <Link icon={TelegramIcon}/>
            <Link icon={LinkedInIcon}/>
        </LinksContainer>
    );
};

export default Links;