import React from 'react';
import {SectionContainer} from "../../../../modules/Containers";
import {LinksSectionWrap} from "../LinksSectionWrap/LinksSectionWrap";
import BottomCircle from "../BottomCircle/BottomCircle";
import Links from "../Links/Links";
import {ButtonContainer} from "../ButtonContainer/ButtonContainer";
import {Button} from "../Button/Button";
import {NormalText} from "../../../../modules/Texts";

export const LinksSection = () => {
    return (
        <SectionContainer>
            <LinksSectionWrap>
                <BottomCircle/>
                <Links/>
                <ButtonContainer>
                    <Button>
                        <NormalText small bold>
                            Скачать резюме
                        </NormalText>
                    </Button>
                </ButtonContainer>
            </LinksSectionWrap>
        </SectionContainer>
    );
};