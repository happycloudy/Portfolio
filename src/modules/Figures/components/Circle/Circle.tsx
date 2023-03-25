import styled from "styled-components";

interface IWrapProps {
    height: string
    width: string
    bg: string
}

interface IProps {
    size: 'small' | 'medium' | 'big'
    color: string
}

const CircleWrap = styled.span<IWrapProps>`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${props => props.bg};
`


export const Circle = ({size, color}: IProps) => {
    let circleSize
    switch (size) {
        case "small":
            circleSize = 13.889
            return <CircleWrap height={`${circleSize}vh`} width={`${circleSize}vh`} bg={color}/>
        case "medium":
            circleSize = 18.519
            return <CircleWrap height={`${circleSize}vh`} width={`${circleSize}vh`} bg={color}/>
        case "big":
            circleSize = 46.296
            return <CircleWrap height={`${circleSize}vh`} width={`${circleSize}vh`} bg={color}/>
        default:
            circleSize = 13.889
            return <CircleWrap height={`${circleSize}vh`} width={`${circleSize}vh`} bg={color}/>
    }
}