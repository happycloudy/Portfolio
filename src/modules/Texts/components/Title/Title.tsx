import styled from "styled-components";

interface IProps {
    tall?: boolean
}

export const Title = styled.p<IProps>`
  font-style: normal;
  font-weight: ${props => props.tall ? 400 : 600};
  font-size: clamp(0.625rem, 720.625rem + -1500vw, 1.5625rem);
  line-height: clamp(0.625rem, 720.625rem + -1500vw, 1.5625rem);
  letter-spacing: 0.04em;
  color: inherit;

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: clamp(1.5625rem, -1.25rem + 5.8594vw, 2.5rem);
    line-height: 60px;
  }
`