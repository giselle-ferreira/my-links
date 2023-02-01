import styled from "styled-components";

export function Footer() {
    return(
        <FooterApp>
            Made with <img src='/media/heart.svg' alt="shaped heart" /> by Giselle Ferreira
        </FooterApp>
    )
}

const FooterApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: 64px auto auto auto;    
    color: #CBCBCB;  
   ;

    img {
        padding: 0 5px;
    }
`;