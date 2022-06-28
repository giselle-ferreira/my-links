import { useState } from 'react';
import styled from "styled-components";
import { WrapperLink, Circle} from '../Styles';

export function TwitterLink() {

    const [isHovering, setIsHovering] = useState(false); 

    return(
        <WrapperLink 
        href="https://twitter.com/giferreira_dev"
        target="_blank"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        >
            <CircleTwitter>            
                <img src='/media/twitter.svg' alt="Twitter Icon" />         
            </CircleTwitter>

            { isHovering ? <HoverText>twitter</HoverText> : <Text>twitter</Text>}

        </WrapperLink>
    )
}

const CircleTwitter = styled(Circle)`
    background: #1DA1F2;
`;

const HoverText = styled.p` 
    color: #1DA1F2;
`;

const Text = styled.p` 
    color: #fff;
`;