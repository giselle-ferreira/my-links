import { MapPin } from "phosphor-react"
import styled from "styled-components"

export function Description() {
    return(
        <div>
            <Info>
                <span><MapPin size={14} />Macaé - RJ - Brasil</span>
                <span>Desenvolvedora de Software</span>
            </Info>

            <WhoAmI>
                Traçando meu caminho em tecnologia a cada novo código. 
            </WhoAmI>
        </div>
    )
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
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
    font-size: 17px;
    width: 300px;
    margin: 34px auto;
`;
