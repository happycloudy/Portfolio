import styled from "styled-components";
import {NormalText} from "../../../../modules/Texts";

const DescriptionStyled = styled.div`
  width: 32vw;
`

interface IProps {
    children: JSX.Element | string
}

const Description = ({children}: IProps) => {
    return (
        <DescriptionStyled>
            <NormalText noSpacing small>
                {children}
            </NormalText>
        </DescriptionStyled>
    );
};

export default Description;