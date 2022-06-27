import { MapPin } from "phosphor-react"
import styled from "styled-components"

export function Description() {
    return(
        <div>
            <Info>
                <span><MapPin size={13} />Macaé - RJ - Brasil</span>
                <span>Desenvolvedora Front-end</span>
            </Info>

            <WhoAmI>
                Desenvolvedora Front-end, traçando meu caminho em tech a cada novo código. 
            </WhoAmI>
        </div>
    )
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: #CBCBCB;
`;

const WhoAmI = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    width: 302px;
    margin: 34px auto;
`;
