import styled from "styled-components";

interface IProps {
    pl?: string
    pr?: string
    pt?: string
    pb?: string
}

export const SectionContainer = styled.section<IProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  
  &:last-child {
    height: 102vh;
  }
`