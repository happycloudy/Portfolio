import styled, {keyframes} from "styled-components";


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
  animation: ${animation} ${({theme}) => theme.timings.long} ease-out forwards;
  transform: translate(40vw, 0);
  opacity: 0;
  animation-delay: 0.5s;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -2;
`