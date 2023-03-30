import styled from "styled-components";

export const SkillsSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 0;
  }
`