import styled from 'styled-components'

export const Container = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.3em;
    margin: 2.5em auto;
    flex-wrap: wrap;   
    max-width: 28em;  */

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 2.5em auto;
    flex-wrap: wrap;   
    max-width: 30em; 
`;

export const LinkBox = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 13.5em; 
    height: 2.8em;
    border-radius: 10px; 
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    background-color: green;

    &:hover {
        background: #211b3c;
        opacity: calc(.75);
    }

    &:active {
        transform: scale(.95);
        box-shadow: inset 1px 1px 6px #000;
    }

    img {
        /* display: flex; */
        justify-content: center;
        height: 1.2em;
        margin-right: .5em;
    }

    span {
        text-align: center;
        font-size: 13.5px;
        line-height: 18px;
        padding: 6em 1em;
        font-weight: 600;
    }
;`
