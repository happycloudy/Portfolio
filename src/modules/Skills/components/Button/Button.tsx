import styled from "styled-components";

const borderWidth = 3


export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  background: #fff;
  position: relative;
  cursor: pointer;
  transition: ${({theme}) => theme.timings.normal};
  
  &::before {
    content: "";
    position: absolute;
    left: -${borderWidth}px;
    top: -${borderWidth}px;
    right: -${borderWidth}px;
    bottom: -${borderWidth}px;
    border-radius: 34px;
    z-index: -1;
    background: linear-gradient(63.11deg, #8E44AD 0%, #FFC0CB 61.46%);
    
    transition: ${({theme}) => theme.timings.normal};
    transform: translateY(4px);
    opacity: 0;
  }
  
  &:hover:not(.active)::before {
    background: linear-gradient(63.11deg, #8E44AD 0%, #FFC0CB 61.46%);
    transform: translateY(0);
    opacity: 1;
  }
  
  &.active {
    background: linear-gradient(63.11deg, #8E44AD 0%, #FFC0CB 61.46%);
    color: #fff;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding: 28px 35px;
  }
`