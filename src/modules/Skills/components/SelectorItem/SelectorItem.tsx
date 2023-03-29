import styled from "styled-components";

export const SelectorItem = styled.button`
  padding: 10px;
  border-radius: 100%;
  position: relative;

  &:not(.active):hover::before {
    background: ${({theme}) => theme.colors.cyan};
    content: '';
    position: absolute;
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    left: -2px;
    top: -2px;
    border-radius: 100%;
    z-index: -1;
  }

  &.active {
    background: ${({theme}) => theme.colors.cyan};
  }
`