import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background: ${({theme}) => theme.colors.pink};
  cursor: pointer;
  position: relative;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    position: absolute;
    left: -2px;
    top: -2px;
    z-index: -1;
    border-radius: 20px;
    filter: blur(5px);
    transition: ${({theme}) => theme.timings.normal};
  }
  
  &:hover::before {
    background: ${({theme}) => theme.colors.purple};
  }


  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding: 25px;
  }
`