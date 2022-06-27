import styled from "styled-components";
import { WrapperLink, Circle } from '../Styles';

export function GithubLink() {

  return (
    <WrapperLink href="https://github.com/giselle-ferreira" target="_blank">
        <CircleGithub>
              <img src='/media/github.svg' alt="github icon" />
        </CircleGithub>
    </WrapperLink>
  )
}


const CircleGithub = styled(Circle)`
  background: #000;
`;

