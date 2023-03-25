import styled, {keyframes} from "styled-components";

const animation = keyframes`
  from {
    transform: translateY(-100px);
  } 
  to {
    transform: translateY(10px);
    opacity: 1;
  }
`

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 200px;
  border-radius: 30px;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  height: 70px;
  width: calc(100% - 400px);
  opacity: 0;
  animation: ${animation} 0.7s ease-out 1s forwards;
`