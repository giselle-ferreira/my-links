import styled from "styled-components";
import { WrapperLink, Circle } from '../Styles';
import discordIMG from "src/assets/images/discord.svg"

export function DiscordLink() {

    return(
        <WrapperLink href="https://discordapp.com/users/781661938795020290/" target="_blank" >
             <CircleDiscord>
                <img src={discordIMG} alt="" />
            </CircleDiscord>
        </WrapperLink>
    )
}


const CircleDiscord = styled(Circle)`
  background: #4B0082;
`;

