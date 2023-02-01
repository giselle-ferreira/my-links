import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;               
    } 

    html {
        height: 100%;
    }

    body {        
        height: 100%; 
        font-family: 'Nunito', sans-serif;
        background: linear-gradient(360deg, #0F0D1A 11.6%, #55439B 100%) no-repeat;
        color: #fff;
    }
`;




