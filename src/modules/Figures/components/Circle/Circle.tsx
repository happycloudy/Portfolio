import styled, {css, keyframes} from "styled-components";
import React from "react";

interface IWrapProps {
    height: string
    width: string
    bg: string
    animationDelay: string
    noAnimation?: boolean
    hover?: boolean
}

interface IProps{
    size: 'small' | 'medium' | 'big'
    bg: string
    animationDelay?: string
    children?: JSX.Element | string
    noAnimation?: boolean
    as?: string | React.ComponentType<any>
    href?: string
    hover?: boolean
}

const floatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px)
  }
  100% {
    transform: translateY(0)
  }
`

const animationCSS = css<Pick<IWrapProps, 'animationDelay'>>`
  animation: ${floatingAnimation} 2s infinite ease-in-out;
  animation-delay: ${props => props.animationDelay};
`

const CircleWrap = styled.span<IWrapProps>`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${props => props.bg};
  transition: ${({theme}) => theme.timings.normal};
  ${props => !props.noAnimation && animationCSS}
  
  &:hover {
    transform: scale(1.1, 1.1);
  }
`


export const Circle = ({size, children, animationDelay = '0', ...props}: IProps) => {
    let circleSize
    switch (size) {
        case "small":
            circleSize = 13.889
            break
        case "medium":
            circleSize = 18.519
            break
        case "big":
            circleSize = 46.296
            break
        default:
            circleSize = 13.889
            break
    }

    return (
        <CircleWrap height={`${circleSize}vh`}
                    width={`${circleSize}vh`}
                    animationDelay={animationDelay}
                    {...props}
        >
            {children}
        </CircleWrap>
    )
}