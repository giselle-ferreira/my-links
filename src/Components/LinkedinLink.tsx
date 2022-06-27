import styled from 'styled-components';
import { WrapperLink, Circle } from '../Styles';

export function LinkedinLink() {
  return (
    <WrapperLink href="https://linkedin.com/in/giselleferreiras" target="_blank">
        <CircleLinkedin>
          <img src='/media/linkedin.svg' alt="Linkedin icon" />
        </CircleLinkedin>
    </WrapperLink>
  )
}

const CircleLinkedin = styled(Circle)`
  background: #0077B5;
`;












