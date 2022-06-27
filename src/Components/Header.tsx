import { LinkSimple } from "phosphor-react";
import styled from "styled-components";

export function Header() {
    return(
        <HeaderBox>
            <Title>Connect<LinkSimple size={22} color="#CBCBCB" /></Title>
            <ProfileImg src='/media/profile-picture.png' alt="Giselle's profile picture" width="60"/>
            <Circle></Circle>
        </HeaderBox>
    )
}

const Title = styled.span`
    color: #fff;
    position: absolute;
    bottom: 55px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: unset;
`;

const HeaderBox = styled.header`
    height: 130px;
    background-color: #504093;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 0 0 20px 20px;
    box-shadow: -5px 15px 15px -17px #111;
    position: relative;
    z-index: 0;     
`;

const ProfileImg = styled.img` 
    position: absolute;   
    z-index: 1;
    bottom: -11px;
    cursor: pointer;
`;

const Circle = styled.span`
    position: absolute;
    width: 86px;
    height: 86px;
    background-color: #504093;
    box-shadow: 0px 15px 15px -15px #111;
    border-radius: 50%;
    z-index: -2;
    bottom: -24px;
`;