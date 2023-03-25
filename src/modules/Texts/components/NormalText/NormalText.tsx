import styled from "styled-components";

interface IProps {
    noSpacing?: boolean
    small?: boolean
}

export const NormalText = styled.p<IProps>`
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.small ? '20px' :'24px'};
  line-height: 36px;
  letter-spacing: ${props => props.noSpacing ? 0 : '0.1em'};
`