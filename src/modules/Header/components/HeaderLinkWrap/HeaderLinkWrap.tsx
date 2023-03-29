import styled from "styled-components";

export const HeaderLinkWrap = styled.a`
  padding: 10px 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.1em;
  background: transparent;
  transition: ${({theme}) => theme.timings.normal};
  color: ${({theme}) => theme.colors.black};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-radius: 10px;
    color: ${({theme}) => theme.colors.cyan};
    background: ${({theme}) => theme.colors.gray};
  }
`