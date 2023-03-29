import styled from "styled-components";

export const SkillsWrap = styled.div`
  height: 100%;
  width: 80vw;
  padding-top: 7vh;
  transition-delay: 0.5s;
  opacity: 0;
  
  &.right {
    margin-left: 20vw;
    opacity: 1;
  }
  
  &.left {
    margin-left: 0;
    opacity: 1;
  }
`