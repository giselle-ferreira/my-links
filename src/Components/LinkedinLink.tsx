import styled from 'styled-components';
import { WrapperLink, Circle } from '../Styles';
import linkedinIMG from "src/assets/images/linkedin.svg"

export function LinkedinLink() {
  return (
    <WrapperLink href="https://linkedin.com/in/giselleferreiras" target="_blank">
        <CircleLinkedin>
          <img src={linkedinIMG} alt="" />
        </CircleLinkedin>
    </WrapperLink>
  )
}

const CircleLinkedin = styled(Circle)`
  background: #0077B5;
`;












