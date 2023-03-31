import styled, {keyframes} from "styled-components";

const smallScreenAnimation = keyframes`
  0% {
    transform: translate(-30vw, 0);
  }
  100% {
    transform: translate(-40vw, 50vh); 
    opacity: 1;
  }
`


const animation = keyframes`
  0% {
    transform: translate(-2vw, 0);
  }
  100% {
    transform: translate(-8vw, 39.814vh); 
    opacity: 1;
  }
`

export const BigCircleWrap = styled.div`
  animation: ${smallScreenAnimation} ${({theme}) => theme.timings.long} ease-out forwards;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  z-index: -2;

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    animation: ${animation} ${({theme}) => theme.timings.long} ease-out forwards;
  }
`