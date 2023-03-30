import styled from "styled-components";


export const SkillsListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    gap: 35px;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    padding: 0 154px;
    margin-top: 150px;
  }
`