import styled from "styled-components";

export const SelectorItem = styled.button`
      padding: 10px;
  border-radius: 100%;
  
  &:hover {
    outline: 1px solid ${({theme}) => theme.colors.black};
  }
  
  &.active {
    outline: 3px solid ${({theme}) => theme.colors.gray};
  }
`