import styled from "styled-components";

interface IProps {
    left?: boolean
}

export const ArrowBase = styled.span<IProps>`
  position: relative;
  height: 16px;
  width: 16px;
  cursor: pointer;
  ${props => props.left ? 'transform: rotate(180deg);': ''}

  &::before, &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 16px;
    background: ${({theme}) => theme.colors.cyan};
  }

  &::before {
    left: 0;
    top: 0;
    transform: rotate(25deg);
    transform-origin: left;
  }

  &::after {
    left: 0;
    bottom: 0;
    transform: rotate(-25deg);
    transform-origin: left;
  }
`