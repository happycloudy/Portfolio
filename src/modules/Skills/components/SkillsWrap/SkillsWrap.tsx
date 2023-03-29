import styled, {keyframes} from "styled-components";

const animatedLeftReveal = keyframes`
  0% {
    transform: translate(-100px);
    opacity: 1;
  }
  
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const animatedRightReveal = keyframes`
  from{
    transform: translate(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`


export const SkillsWrap = styled.div`
  height: 100%;
  width: 80vw;
  padding-top: 7vh;
  transition-delay: 0.5s;
  
  &.right {
    margin-left: 20vw;
    opacity: 0;
    animation: ${animatedRightReveal} ${({theme}) => theme.timings.normal} forwards 0.5s;
  }
  
  &.left {
    margin-left: 0;
    opacity: 0;
    animation: ${animatedLeftReveal} ${({theme}) => theme.timings.normal} forwards 0.5s;
  }
`