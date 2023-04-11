import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10vw;
  
  & > * {
    width: 100%;
  }
  
  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding: initial;
    width: auto;

    & > * {
      width: auto;
    }
  }
`