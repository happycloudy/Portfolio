import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {GlobalStyles} from "./modules/Global/styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "./modules/Global/styles/theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
