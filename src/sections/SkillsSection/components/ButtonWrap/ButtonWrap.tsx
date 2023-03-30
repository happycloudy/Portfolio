import styled, {keyframes} from "styled-components";

const activeAnimationLeft = keyframes`
  0% {
    top: 0;
    right: 0;
  }
  
  50%{
    width: 100vw;
  }
  
  100% {
    width: 20vw;
    top: 0;
    left: 0;
  }
`

const activeAnimationRight = keyframes`
  0% {
    top: 0;
    left: 0;
  }
  
  50%{
    width: 100vw;
  }
  
  100% {
    top: 0;
    right: 0;
  }
`

export const ButtonWrap = styled.button`
  position: relative;
  width: 100vw;
  max-height: 50%;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #8E44AD 44.79%, #3498DB 100%);
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: ${({theme}) => theme.timings.normal} cubic-bezier(0.455, 0.030, 0.515, 0.955);

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transition: ${({theme}) => theme.timings.normal} cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }

  &:hover.right::before {
    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
      background: ${({theme}) => theme.colors.purple};
      transform: translateX(-50px);
    }
  }

  &:hover.left::before {
    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
      background: ${({theme}) => theme.colors.cyan};
      transform: translateX(50px);
    }
  }

  &.right {
    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
      animation: ${activeAnimationRight} ${({theme}) => theme.timings.long} ease-in-out forwards;
    }
  }

  &.left {
    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
      animation: ${activeAnimationLeft} ${({theme}) => theme.timings.long} ease-in-out forwards;
    }
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    position: absolute;
    width: 20vw;
    height: 100%;
    min-height: auto;
    max-height: none;
  }
`