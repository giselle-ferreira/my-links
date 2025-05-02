import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;        
    }

    body {     
        height: 100%;
        background-image: url("/media/bg-network-connection.jpg");
        /* background-image: url("/media/gradient-background.jpg"); */
        color: #fff;
        background-size: cover;
    }

    /* @media (min-width: 1440px) {
        body {     
            height: 100vh;
        }
      }  */

    a {
        text-decoration: none;
        color: inherit;
    }
`;




