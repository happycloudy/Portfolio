import styled from "styled-components";

export const LinksContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  & img {
    width: 32px;
    height: auto;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    & img {
      width: auto;
      height: auto;
    }
    
    flex-direction: row;
  }
`