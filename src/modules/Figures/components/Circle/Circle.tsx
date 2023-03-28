import styled, {css, keyframes} from "styled-components";

interface IWrapProps {
    height: string
    width: string
    bg: string
    animationDelay: string
    noAnimation?: boolean
}

interface IProps {
    size: 'small' | 'medium' | 'big'
    color: string
    animationDelay?: string
    children?: JSX.Element | string
    noAnimation?: boolean
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
  ${props => !props.noAnimation && animationCSS}
`


export const Circle = ({size, color, children, noAnimation, animationDelay = '0'}: IProps) => {
    let circleSize
    switch (size) {
        case "small":
            circleSize = 13.889
            return (
                <CircleWrap height={`${circleSize}vh`}
                            width={`${circleSize}vh`}
                            bg={color}
                            animationDelay={animationDelay}
                            noAnimation={noAnimation}
                >
                    {children}
                </CircleWrap>
            )
        case "medium":
            circleSize = 18.519
            return (
                <CircleWrap height={`${circleSize}vh`}
                            width={`${circleSize}vh`}
                            bg={color}
                            animationDelay={animationDelay}
                            noAnimation={noAnimation}
                >
                    {children}
                </CircleWrap>
            )
        case "big":
            circleSize = 46.296
            return (
                <CircleWrap height={`${circleSize}vh`}
                            width={`${circleSize}vh`}
                            bg={color}
                            animationDelay={animationDelay}
                            noAnimation={noAnimation}
                >
                    {children}
                </CircleWrap>
            )
        default:
            circleSize = 13.889
            return (
                <CircleWrap height={`${circleSize}vh`}
                            width={`${circleSize}vh`}
                            bg={color}
                            animationDelay={animationDelay}
                            noAnimation={noAnimation}
                >
                    {children}
                </CircleWrap>
            )
    }
}