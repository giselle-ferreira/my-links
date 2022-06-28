import { useState } from 'react';
import styled from 'styled-components';
import { WrapperLink, Circle } from '../Styles';

export function LinkedinLink() {

  const [isHovering, setIsHovering] = useState(false); 


  return (
    <WrapperLink
    href="https://linkedin.com/in/giselleferreiras"
    target="_blank"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
        <CircleLinkedin>
          <img src='/media/linkedin.svg' alt="Linkedin icon" />
        </CircleLinkedin>

        { isHovering ? <HoverText>linkedin</HoverText> : <Text>linkedin</Text>}

    </WrapperLink>
  )
}

const CircleLinkedin = styled(Circle)`
  background: #0077B5;
`;

const HoverText = styled.p` 
    color: #0077B5;
`;

const Text = styled.p` 
    color: #fff;
`;











