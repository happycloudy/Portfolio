import React from 'react';
import styled from "styled-components";
import SplashImage from '../../../../assets/splash.svg'

const SplashWrap = styled.img`
  display: none;
  width: 27vw;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-1vw, -10vh) rotate(40.59deg);
  
  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    display: block;
  }
`

export const Splash = () => {
    return (
        <SplashWrap src={SplashImage}/>
    );
};