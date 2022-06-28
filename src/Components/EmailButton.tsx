import { EnvelopeSimple } from 'phosphor-react';
import { useState } from 'react';
import styled from 'styled-components';
import { SmallButton } from '../Styles';

export function EmailButton() {

    const [isHovering, setIsHovering] = useState(false); 


    return(
        <SmallButton href="mailto:giselle.fs@gmail.com"
        onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            >
                { isHovering ? (
                <Message>Email Me</Message>                
            ) : (
                <EnvelopeSimple size={32} color="#fff" />
            ) }     
            
        </SmallButton>
    )
}

const Message = styled.span`
    color: #fff;
`;