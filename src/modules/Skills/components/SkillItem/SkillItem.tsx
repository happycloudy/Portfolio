import styled from "styled-components";

export const SkillItem = styled.span`
  padding: 35px 40px;
  color: #fff;
  border-radius: 30px;
  
  &:nth-child(even) {
    background: ${({theme}) => theme.colors.purple};
  }

  &:nth-child(odd) {
    background: ${({theme}) => theme.colors.cyan};
  }
`