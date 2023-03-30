import styled from "styled-components";

export const BottomCircleWrap = styled.div`
  display: none;
  position: absolute;
  bottom: calc(-500px / 2);
  left: 1vw;

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    display: block;
  }
`