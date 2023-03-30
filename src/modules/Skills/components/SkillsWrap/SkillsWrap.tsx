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
  width: 100vw;
  padding-top: 10px;
  transition-delay: 0.5s;
  
  &.right {
    opacity: 0;
    animation: ${animatedRightReveal} ${({theme}) => theme.timings.normal} forwards 0.5s;

    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
      margin-left: 20vw;
    }
  }
  
  &.left {
    opacity: 0;
    animation: ${animatedLeftReveal} ${({theme}) => theme.timings.normal} forwards 0.5s;
    
    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
      margin-left: 0;
    }
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding-top: 130px;
    width: 80vw;
  }
  
  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    padding-top: 100px;
    width: 80vw;
  }
`