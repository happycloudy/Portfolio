import React from 'react';
import {LinksContainer} from "../LinksContainer/LinksContainer";
import Link from "../Link/Link";
import VkIcon from "../../../../assets/vk.svg"
import MainIcon from "../../../../assets/mail.svg"
import TelegramIcon from "../../../../assets/telegram.svg"

const Links = () => {
    return (
        <LinksContainer>
            <Link icon={VkIcon} href={'https://vk.com/jonyoned'}/>
            <Link icon={MainIcon} href={'mailto:arion.mikola@gmail.com'}/>
            <Link icon={TelegramIcon} href={'https://t.me/happycloudy'}/>
        </LinksContainer>
    );
};

export default Links;