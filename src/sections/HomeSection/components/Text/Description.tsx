import styled from "styled-components";
import {NormalText} from "../../../../modules/Texts";

const DescriptionStyled = styled.div`
  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    width: 45vw;
  }
`

interface IProps {
    children: any
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