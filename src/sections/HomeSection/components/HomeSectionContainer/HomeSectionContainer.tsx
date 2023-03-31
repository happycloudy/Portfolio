import styled from "styled-components";

export const HomeSectionContainer = styled.div`
  padding: 70px 50px;
  
  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding: 345px 200px;
  }
`