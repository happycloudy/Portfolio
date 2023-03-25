import styled, {keyframes} from "styled-components";

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
  animation: ${animation} ${({theme}) => theme.timings.long} ease-out forwards;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  z-index: -2;
`