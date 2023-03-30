import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 10vw;
  margin-top: 30px;
  
  &.hidden {
    visibility: hidden;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    margin-top: 70px;
    flex-direction: row;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    padding: 0 20vw;
  }
`