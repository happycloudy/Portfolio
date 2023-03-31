import styled from "styled-components";

export const LinksContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`