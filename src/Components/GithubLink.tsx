import styled from "styled-components";
import { WrapperLink, Circle } from '../Styles';
import githubIMG from "src/assets/images/github.svg"

export function GithubLink() {

  return (
    <WrapperLink href="https://github.com/giselle-ferreira" target="_blank">
        <CircleGithub>
              <img src={githubIMG} alt="" />
        </CircleGithub>
    </WrapperLink>
  )
}


const CircleGithub = styled(Circle)`
  background: #000;
`;

