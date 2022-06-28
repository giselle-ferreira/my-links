import { useState } from "react";
import styled from "styled-components";
import { WrapperLink, Circle } from '../Styles';

export function DiscordLink() {

    const [isHovering, setIsHovering] = useState(false); 

    return(
        <WrapperLink
        href="https://discordapp.com/users/781661938795020290/"
        target="_blank"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        >
             <CircleDiscord>
                <img src='/media/discord.svg' alt="" />                
            </CircleDiscord>

            { isHovering ? <HoverText>discord</HoverText> : <Text>discord</Text>}

        </WrapperLink>
    )
}


const CircleDiscord = styled(Circle)`
  background: #4B0082;
`;

const HoverText = styled.p` 
    color: #4B0082;
`;

const Text = styled.p` 
    color: #fff;
`;
