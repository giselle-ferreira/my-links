import { useState } from 'react';
import styled from "styled-components";
import { WrapperLink, Circle } from '../Styles';

export function GithubLink() {

  const [isHovering, setIsHovering] = useState(false); 


  return (    
    <WrapperLink
    href="https://github.com/giselle-ferreira"
    target="_blank"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
        <CircleGithub>
              <img src='/media/github.svg' alt="github icon" />
        </CircleGithub>

        { isHovering ? <HoverText>github</HoverText> : <Text>github</Text>}

    </WrapperLink>
  )
}


const CircleGithub = styled(Circle)`
  background: #000;
`;

const HoverText = styled.p` 
    color: #000;
`;

const Text = styled.p` 
    color: #fff;
`;