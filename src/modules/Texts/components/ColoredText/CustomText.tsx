import styled from "styled-components";

interface IProps {
    color?: string
    weight?: number
}

export const CustomText = styled.span<IProps>`
  color: ${props => props.color ? props.color : props.theme.colors.cyan};
  font-weight: ${props => props.weight ? props.weight : 'inherit'};
`