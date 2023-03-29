import styled from "styled-components";

export const ButtonWrap = styled.button`
  position: absolute;
  width: 20vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #8E44AD 44.79%, #3498DB 100%);
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: ${({theme}) => theme.timings.normal} cubic-bezier(0.455,  0.030, 0.515, 0.955);

  &:hover {
    width: 40vw;
  }
  
  &.right {
    top: 0;
    right: 0;
  }
  
  &.left {
    left: 0;
    right: 0;
  }
`