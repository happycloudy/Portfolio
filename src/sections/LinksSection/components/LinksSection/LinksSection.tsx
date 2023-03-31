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
        <SectionContainer id={'links'}>
            <LinksSectionWrap>
                <BottomCircle/>
                <Links/>
                <ButtonContainer>
                    <NormalText small bold>
                        <Button as={'a'} href={'/resume.pdf'}>
                            Скачать резюме
                        </Button>
                    </NormalText>
                </ButtonContainer>
            </LinksSectionWrap>
        </SectionContainer>
    );
};