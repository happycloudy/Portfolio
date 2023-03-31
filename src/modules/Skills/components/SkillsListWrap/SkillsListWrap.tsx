import styled, {keyframes} from "styled-components";

const animationLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const animationRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const SkillsListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    gap: 35px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    padding: 0 154px;
    margin-top: 150px;
  }
  
  &.animationLeft {
    animation: ${animationLeft} ${({theme}) => theme.timings.normal} ease-out;
  }

  &.animationRight {
    animation: ${animationRight} ${({theme}) => theme.timings.normal} ease-out;
  }
`