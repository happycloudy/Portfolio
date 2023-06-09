import styled, {keyframes} from "styled-components";

const smallScreenAnimation = keyframes`
  0% {
    transform: translate(40vw, 0);
  }
  100% {
    transform: translate(70vw, 10vh);
    opacity: 1;
  }
`

const animation = keyframes`
  0% {
    transform: translate(40vw, 0);
  }
  100% {
    transform: translate(40vw, 20vh);
    opacity: 1;
  }
`

export const SmallCircleWrap = styled.div`
  animation: ${smallScreenAnimation} ${({theme}) => theme.timings.long} ease-out forwards;
  transform: translate(40vw, 0);
  opacity: 0;
  animation-delay: 0.5s;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -2;

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    animation: ${animation} ${({theme}) => theme.timings.long} ease-out forwards;
  }
`