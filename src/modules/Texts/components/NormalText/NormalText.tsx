import styled from "styled-components";

interface IProps {
    noSpacing?: boolean
    small?: boolean
    bold?: boolean
}

export const NormalText = styled.p<IProps>`
  font-style: normal;
  font-weight: ${props => props.bold ? 800 : 400};
  font-size: ${props => props.small ?
          'clamp(0.9375rem, 0.7138rem + 1.1186vw, 1.25rem)' :
          'clamp(1.0625rem, 0.7493rem + 1.566vw, 1.5rem)'
  };
  line-height: 36px;
  letter-spacing: ${props => props.noSpacing ? 0 : '0.1em'};
  color: inherit;
`