import styled from "styled-components";

export const BottomCircleWrap = styled.div`
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translate(50%, 50%);

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    right: 0;
    bottom: 0;
    transform: translate(5vw, 5vw);
  }
`