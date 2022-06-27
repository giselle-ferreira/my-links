import styled from "styled-components";


export const WrapperLink = styled.a`
    border: .2px solid #fff;
    border-radius: 4px; 
    padding: 37px;

    &:hover {
        background: #fff;
        opacity: calc(.75);
    }

    &:active {
        transform: scale(.95);
        animation: 1.5s ease-in-out;
    }
`; 


export const Circle = styled.div`    
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${WrapperLink}:hover & {        
        transform: scale(1.2);
        animation: 2s ease-in-out;
    }
    
`;


export const SmallButton = styled.a`
    border: .2px solid #fff;
    border-radius: 4px;
    width: 135px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: #504093;
        border: none;
        box-shadow: 1px 1px 6px #111;
    }

    &:active {
        transform: scale(.95);
        animation: 1.5s ease-in-out;
    }
`;


export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;